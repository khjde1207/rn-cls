import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default {
   
        "f" :  {v : "fontSize", t:wp},
        "lh" : {v : "lineHeight", t:wp},
        "fw" : {v : "fontWeight", t:wp},



        "ma" : {v : "margin", t:wp},
        "mb" : {v : "marginBottom", t:wp},
        "me" : {v : "marginEnd", t:wp},
        "mh" : {v : "marginHorizontal", t:wp},
        "ml" : {v : "marginLeft", t:wp},
        "mr" : {v : "marginRight", t:wp},
        "ms" : {v : "marginStart", t:wp},
        "mt" : {v : "marginTop", t:wp},
        "mv" : {v : "marginVertical", t:wp},

        "pa" : {v : "padding", t:wp},
        "pb" : {v : "paddingBottom", t:wp},
        "pe" : {v : "paddingEnd", t:wp},
        "ph" : {v : "paddingHorizontal", t:wp},
        "pl" : {v : "paddingLeft", t:wp},
        "pr" : {v : "paddingRight", t:wp},
        "ps" : {v : "paddingStart", t:wp},
        "pt" : {v : "paddingTop", t:wp},
        "pv" : {v : "paddingVertical", t:wp},

        "sdof" : {v : "shadowOffset", t:wp}, 

        "tsdof" : {v : "textShadowOffset", t:wp},
        "tsdor" : {v : "textShadowRadius", t:wp},
        "tsdoc" : {v : "textShadowColor", t:"color"},

        "flex" : {v : "flex"},
        "flx" : {v : "flex"},
        "fx" : {v : "flex"},

        "flexb" : {v : "flexBasis"},
        "flxb" : {v : "flexBasis"},
        "fxb" : {v : "flexBasis"},

        "fleg" : {v : "flexGrow"},
        "flg" : {v : "flexGrow"},
        "fxg" : {v : "flexGrow"},

        "flexs" : {v : "flexShrink"},
        "flxs" : {v : "flexShrink"},
        "fxs" : {v : "flexShrink"},

        "fd" : {v : "flexDirection"},

        "col" : {v : "column"},
        "row" : {v : "row"},
        "colr" : {v : "row-reverse"},
        "rowr" : {v : "column-reverse"},


        
        "fwrap" : {v : "flexWrap"} ,
        "w"     : {v : "wrap"} ,
        "nw"    : {v : "nowrap"} ,
        
        
        
        "lesp" :    {v : "letterSpacing"},
        "z" :       {v : "zIndex"},
        "op" :      {v : "opacity"},
        "sdop" :    {v : "shadowOpacity" },

        "po" : {v : "position"},
        "ab" : {v : "absolute"},
        "re" : {v : "relative"},
        "full" : { o: {position :"absolute",    left : 0 , top : 0 , right : 0 , bottom : 0} },
        "fulla" : {o: {position :"absolute",    left : 0 , top : 0 , width : wp(100) , height : hp(100)}},
        
        
        "ac" : {v:"alignContent"},
        "ai" : {v:"alignItems"},
        "as" : {v:"alignSelf"},

        "s" : {v:"flex-start"},
        "e" : {v:"flex-end"},
        "c" : {v:"center"},
        "st" : {v:"stretch"},
        "sb" : {v:"space-between"},
        "sa" : {v:"space-around"},
        "se" : {v:"space-evenly"},
        "b": {v:"baseline"},
        "auto" : {v:'auto'},


        "dp": {v:'display'},
        "none" : {v:"none"},
        
        "jc" : {v:"justifyContent"},

        "br" : {v:"borderStyle"},
        
        "solid" : {v:"solid"},
        "dotted" : {v:"dotted"},
        "dashed" : {v:"dashed"},


        
        'bfv' : {v: "backfaceVisibility"},
        

        'fs' : {v : "fontStyle"},
        


        'ta' : {v : "textAlign"},
        'l' : {v : 'left'},
        'r' : {v : 'right'},
        'c' : {v : 'center'},
        'j' : {v : 'justify'},

        'tdl' : {v : "textDecorationLine"},
        
        "of" : {v:"overflow" },

        "v" : {v: "visible"},
        "h" : {v: "hidden"},


        'rsm' : {v : "resizeMode"},
        


        "bgc" : {v : "backgroundColor"},
        "bc" : {v : "borderColor"},
        "blc" : {v : "borderLeftColor"},
        "btc" : {v : "borderTopColor"},
        "brc" : {v : "borderRightColor"},
        "bbc" : {v : "borderBottomColor"},
        "bsc" : {v : "borderStartColor"},
        "bec" : {v : "borderEndColor"},
        "tsdoc" : {v : "textShadowColor"},
        "sdoc" : {v : "shadowColor"},
        "tint" : {v : "tintColor"},
        "selc" : {v : "selectionColor"},
        "tdc" : {v : "textDecoratiojnColor"},
        "phtc" :"laceholderTextColor",
        "subtc" :"ubtitleColor",
        "tc" : {v : "titleColor"},
        "uc" : {v : "underlayColor"},

        //react-native-elements 
        "chkc" : {v :  "checkedColor"},
        "unchkc" : {v :  "uncheckedColor"},
        "rec" : {v :  "reverseColor"},
        "winbgc" : {v :  "windowBackgroundColor"},
        "iconc" : {v :  "iconColor"},
        "hic" : {v :  "highlightColor"},
        "poc" : {v :  "pointerColor"},
        "statusc" : {v :  "androidStatusBarColor"},
        "phic" : {v : "placeholderIconColor"},
        "seldc" : {v : "selectedColor"},
   
}