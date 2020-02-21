react-native 에 스타일을 쉽게 쓸수 있게 만든 프로젝트 

react-native-responsive-screen 을 이용하여 모든 디바이스 에 동일한 style 를 사용 가능 할꺼라고 기대함. 

    install 

```
npm install --save rn-cls 
or 
npm install --save https://github.com/khjde1207/rn-cls
```

    use 

```
import React from 'react';
import { Text, View} from 'react-native';

import Cls from 'rn-cls'

export default App = ()=>{
  return (
    <Cls>
        <View cls="ai-c jc-c po-fulla"> 
            <Text cls="f4">Test</Text>
        </View>
    </Cls>
  )
}
```

폰트 옵션 : 

```
fontSize : f 
ex : f-1, f-2, f-3 .....

fontWeight :fw 
ex : f-100 , fw-700

fontStyle : fs 

```

margin / padding 

```
margin : ma 
ex : ma-1 , ma-2 , ma-100

marginBottom : mb
marginEnd : me
marginHorizontal:mh
marginLeft: ml
marginRight: mr
marginStart: ms
marginTop: mt
marginVertical: mv

padding  m -> p . 

```

width / height : 

```
width : w 
height : h 
height based on screen width : wh
width based on screen height  : hw 

```

position : 
```
position : po
ex : po-ab , po-re //position : absolute, position : relative

top : top
bottom : bottom
left : left
right : right

po-full  : 
{position :"absolute",    left : 0 , top : 0 , right : 0 , bottom : 0}

po-fulla : 
{o: {position :"absolute",    left : 0 , top : 0 , width : wp(100) , height : hp(100)}}
```

text : 

```
textAlign : ta
    left : l
    right : r
    center : c
    justify : j

ex : ta-r // textAlign : right

textDecorationLine : tdl
textDecoratiojnColor : tdc
lineHeight : wp
```

shadow : 
```
shadowOffset : sdof
shadowOpacity : sdop
shadowColor : sdoc

textShadowOffset : tsdof
textShadowRadius : tsdor
textShadowColor : tsdoc

```

layout : 
```
flex : flex or flx or fx

flexBasis : flexb, flxb, fxb
flexGrow : fleg, flg, fxg
flexShrink : flexs, flxs, fxs

flexDirection : fd 
ex : fd-row , fd-col , fd-rowr, fd-colr

flexWrap : fwrap
ex : fwrap-wr , fwrap-wrap, fwrap-nw

justifyContent : jc

alignContent : ac
alignItems : ai 
alignSelf : as

    flex-start : s
    flex-end : e
    center : c
    stretch : st
    space-between : sb
    space-around : sa 
    space-evenly : se

ex : ac-c , jc-c  //alignContent : center, justifyContent :center


```
border : 
```
borderRadius :br
borderStyle : bs
    solid
    dotted
    dashed

ex : bs-solid


```

etc ... 

```
letterSpacing : lesp
zIndex : z
opacity : op 
baseline : b
auto : auto
display : dp 
    none :none

backfaceVisibility : bfv

```

------

target Style : 

```
ex :    <View cls="..."/> //<View style={{....}} />
        <View cccls="..."/> //<View contentContainerStyle={{....}} />
        <View itemcls="..."/> //<View itemStyle={{....}} />

style : cls 
contentContainerStyle : cccls
indicatorStyle : incls
columnWrapperStyle : colcls
imageStyle : imgcls
presentationStyle : prcls 
itemStyle : itemcls 
avatarStyle : acls
backgroundImageStyle : bgicls
badgeStyle : badgecls
buttonStyle : btncls
containerStyle : ccls
disabledSelectedStyle : dscls
disabledSelectedTextStyle : dstcls
disabledStyle : dcls
disabledTitleStyle : dtcls
errorStyle : ecls
featuredSubtitleStyle : fstcls
featuredTitleStyle : ftcls
fontStyle : fcls
iconContainerStyle : iccls
iconStyle : icls
imageWrapperStyle : iwcls
innerBorderStyle : ibcls
labelStyle : lcls
leftContainerStyle : lccls
leftIconContainerStyle : liccls
overlayContainerStyle : occls
overlayStyle : ocls
placeholderStyle : pcls
rightContainerStyle : rccls
rightContentContainerStyle : rcccls
rightIconContainerStyle : riccls
rightSubtitleStyle : rstcls
rightTitleStyle : rtcls
selectedButtonStyle : sbcls
selectedTextStyle : stcls
thumbStyle : tbcls
titleStyle : tcls
trackStyle : tkcls
wrapperStyle : wcls
PlaceholderContent : pccls
centerContainerStyle : centerccls 
leftContainerStyle : leftccls 
rightContainerStyle : rightccls 
barStyle : barcls
captionStyle : capcls
dividerStyle : divcls
imageContainerStyle : imgccls
inputStyle : inputcls
inputContainerStyle : inputccls
loadingStyle : loadcls
subtitleStyle : subtcls
textStyle : textcls
headerStyle : hcls 
contentStyle : cntcls 
expandedIconStyle : expcls 
tabBarUnderlineStyle : tbulcls 
tabStyle : tabcls 
activeTabStyle : atabcls 
activeTextStyle : atcls 
tabsContainerStyle : tccls 
underlineStyle : ulcls 
buttonTextStyle : btntextcls 
backButtonTextStyle : bbtcls 
leftButtonIconStyle : lbicls 
leftButtonStyle : lbcls 
leftButtonTextStyle : lbycls 
navigationBarStyle : nbcls 
navigationBarTitleImageStyle : nbticls 
rightButtonStyle : rbcls 
rightButtonTextStyle : rbtcls 
tabBarStyle : tabbcls 
```


    color:
--------

bgc-[colorName] = {backgroundColor :o }

bc-[colorName] = {borderColor :o }

blc-[colorName] = {borderLeftColor :o }

btc-[colorName] = {borderTopColor :o }

brc-[colorName] = {borderRightColor :o }

bbc-[colorName] = {borderBottomColor :o }

bsc-[colorName] = {borderStartColor :o }

bec-[colorName] = {borderEndColor :o }

tsdoc-[colorName] = {textShadowColor : o};

tint-[colorName] = {tintColor : o};

selc-[colorName] = {selectionColor : o}; 

phtc-[colorName] ={placeholderTextColor : o};

subtc-[colorName] ={subtitleColor : o};

tc-[colorName] = {titleColor : o};

uc-[colorName] = {underlayColor:o};

chkc-[colorName] =  {checkedColor : o}

unchkc-[colorName] =  {uncheckedColor : o}

rec-[colorName] =  {reverseColor : o}

winbgc-[colorName] =  {windowBackgroundColor:o};

iconc-[colorName] =  {iconColor:o};

seldc-[colorName] = {selectedColor : o};



statusc-[colorName] =  {androidStatusBarColor:o}; //android

phic-[colorName] = {placeholderIconColor : o}//ios

tdc-[colorName] = {textDecorationColor : o}; //ios


