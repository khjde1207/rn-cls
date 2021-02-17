import _ from 'lodash';
import StyleMap from './styleMap';
import StyleObj from './styleObj';
import ColorObj from './colorObj';

const cls2styles = clsStr => {
  clsStr = clsStr.replace(/, /g, ',');
  clsStr = clsStr.replace(/ ,/g, ',');
  let clsRoots = clsStr.split(' ');
  return _.map(clsRoots, cls => {
    let clss = cls.split('-');
    if (clss.length === 3 && clss[1] == '' && !_.isNaN(_.toNumber(clss[2]))) {
      clss = [clss[0], -clss[2]];
    }
    if (clss.length > 1) {
      let rtn = {};
      let clsName = StyleObj[clss[0]];
      if (!clsName) {
        return rtn;
      }

      let clsFn = clsName.t;

      clsName = clsName.v;
      let clsValue = clss[1];

      rtn[clsName] = {};

      let reg = /^\d+(\.\d+)?%$/;
      if (_.isNaN(Number(clsValue)) && !reg.test(clsValue)) {
        if (StyleObj[clsValue] || ColorObj[clsValue]) {
          rtn[clsName] = targetObj;
          let targetObj = _.get(StyleObj, `${clsValue}`);
          if (!targetObj) {
            targetObj = _.get(ColorObj, `${clsValue}`);
          }

          if (targetObj.o) {
            return targetObj.o;
          }
          if (targetObj.v) {
            rtn[clsName] = targetObj.v;
          } else {
            rtn[clsName] = targetObj;
          }

          return rtn;
        }
      }
      let regpx = /^\d+(\.\d+)?px$/;
      if (regpx.test(clsValue)) {
        rtn[clsName] = Number(clsValue.replace('px', ''));
      } else if (reg.test(clsValue)) {
        rtn[clsName] = clsValue;
      } else if (clsFn) {
        rtn[clsName] = clsFn(clsValue);
      } else {
        rtn[clsName] = clsValue;
      }
      return rtn;
    }
    return {};
  });
};
const prop2styles = props => {
  let filterObj = _.filter(
    _.map(props, (v, k) => {
      if (StyleMap[k]) {
        let rtn = {};
        rtn[StyleMap[k]] = cls2styles(v);
        return rtn;
      }
    }),
    _.isObject,
  );
  let rtn = {};
  _.forEach(filterObj, v => {
    let k = _.keys(v).pop();
    if (props[k]) {
      v[k].push(props[k]);
    }
    rtn[k] = v[k];
  });
  return rtn;
};

export {cls2styles, prop2styles};
