import React from 'react';
import _ from 'lodash';
import {prop2styles} from './lib/cls';
import colorObj from './lib/colorObj';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ClsComponent = comp => {
  let child = _.get(comp, 'children') || _.get(comp, 'props.children');

  if (child) {
    let rtnMap = React.Children.map(child, childcomp => {
      if (React.isValidElement(childcomp)) {
        let cls = prop2styles(childcomp.props);
        let rtn = {};
        let child_child =
          _.get(childcomp, 'children') || _.get(childcomp, 'props.children');

        let target = runPatternCls(childcomp);
        if (target) {
          cls = _.merge(target, cls);
        }

        _.forEach(childcomp.props, (prop, key) => {
          if (key === 'children') {
            return;
          }
          var bel = React.isValidElement(prop);
          if (bel) {
            let clsch = prop2styles(prop.props);
            let clschTarget = runPatternCls(prop);

            if (clschTarget) {
              clsch = _.merge(clschTarget, clsch);
            }

            cls[key] = React.cloneElement(prop, clsch, ClsComponent(prop));
          }
        });
        if (child_child) {
          rtn = React.cloneElement(childcomp, cls, ClsComponent(childcomp));
        } else {
          rtn = React.cloneElement(childcomp, cls);
        }
        return rtn;
      }
      return childcomp;
    });
    return React.Children.count(rtnMap) === 1 ? rtnMap[0] : rtnMap;
  }

  if (React.isValidElement(comp)) {
    var cls = prop2styles(comp.props);
    return React.cloneElement(comp, cls);
  }
  return null; //React.cloneElement(comp, {style:{}})
};
let test = prop2styles;
let setColor = (id, colorCode) => {
  // console.log(colorObj)
  colorObj[id] = colorCode;
  return true;
};

let clsGet = text => {
  let rtn = prop2styles({cls: text});
  if (rtn.style) {
    return rtn.style[0];
  }
  return rtn;
};

let patternCls = [];
const addPatternCls = obj => {
  patternCls.push(obj);
};
const setPatternCls = arr => {
  patternCls = arr;
};
const getPatternCls = () => {
  return patternCls;
};
const runPatternCls = comp => {
  let rtn = _.map(patternCls, (v, idx) => {
    let tmp = _.get(comp, v.target, undefined);
    if (tmp !== undefined && v.filter(tmp)) {
      return {...prop2styles(v.value), ...v.props};
    }
    return null;
  });
  return _.merge(..._.filter(rtn, null));
};
const Cls = props => {
  let comp = <ClsComponent {...props} />;
  return comp;
};

export {
  test,
  setColor,
  wp,
  hp,
  clsGet,
  getPatternCls,
  setPatternCls,
  addPatternCls,
  Cls,
};

export default Cls;
