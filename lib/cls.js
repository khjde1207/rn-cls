import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import _ from 'lodash'
import StyleMap from './styleMap'
import StyleObj from './styleObj'
import ColorObj from './colorObj'


const cls2styles = (clsStr)=>{
    let clsRoots = clsStr.split(" ")
    return _.map(clsRoots , (cls)=>{
        let clss = cls.split("-")
        if(clss.length > 1){
            let rtn = {};
            let clsName = StyleObj[clss[0]];
            if(!clsName){return rtn;}

            let clsFn = clsName.t;

            clsName = clsName.v
            let clsValue = clss[1];
            
            rtn[clsName] = {};
            
            if(_.isNaN(Number(clsValue) ) && !(/^\d+(\.\d+)?%$/.test(clsValue)) ){
                if(StyleObj[clsValue] || ColorObj[clsValue]) {
                    rtn[clsName] = targetObj
                    let targetObj = _.get(StyleObj, `${clsValue}`)
                    if(!targetObj){targetObj = _.get(ColorObj, `${clsValue}`) }
  
                    if(targetObj.o){  
                        return targetObj.o 
                    }
                    if(targetObj.v){ rtn[clsName] = targetObj.v ; }else{rtn[clsName] = targetObj}
                    
                    
                    return rtn;
                }
                
            }
            if(clsFn){
                rtn[clsName] = clsFn(clsValue)    
            }else{
                rtn[clsName] = clsValue
            }
            return rtn; 
    
        }
        return {};
    })
}

const prop2styles = (props)=>{
    let filterObj = _.filter(_.map(props , (v,k)=>{
        if(StyleMap[k]){
            let rtn = {};
            rtn[StyleMap[k]] = cls2styles(v) ; 
            return rtn
        }
    }) , _.isObject )   
    
    let rtn = {};
    _.forEach(filterObj , (v)=>{
        let k = _.keys(v).pop() 
        if(props[k]){
            v[k].push(props[k]);
        }
        rtn[k] = v[k]
        
    }) 
    return rtn
}

export{
    cls2styles,
    prop2styles
}