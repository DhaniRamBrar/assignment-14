"use strict";(self.webpackChunka1dhanirambrar=self.webpackChunka1dhanirambrar||[]).push([[482],{"./src/stories/Card/Card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CardInterative:()=>CardInterative,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_stories});__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardWrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n  background-color: ",";\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  margin: 10px;\n  flex: 1;\n  min-width: 280px;\n  max-width: 400px;\n  border: ",";\n\n  ","\n"])),(_ref=>{let{$backgroundColor}=_ref;return $backgroundColor||"#fff"}),(_ref2=>{let{$borderStyle,$borderColor}=_ref2;return"".concat($borderStyle||"none"," ").concat($borderColor||"transparent")}),(_ref3=>{let{$hoverEffect}=_ref3;return $hoverEffect&&(0,styled_components_browser_esm.AH)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)(["\n      &:hover {\n        transform: translateY(-5px);\n        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);\n      }\n    "])))})),CardImage=styled_components_browser_esm.Ay.img(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)(["\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n"]))),CardContent=styled_components_browser_esm.Ay.div(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.A)(["\n  padding: 20px;\n  text-align: ",";\n"])),(_ref4=>{let{$alignText}=_ref4;return $alignText}));styled_components_browser_esm.Ay.div(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.A)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n"])));function Card(_ref5){let{title,content,imageUrl,alignText="left",hoverEffect=!1,backgroundColor,borderStyle,borderColor}=_ref5;return(0,jsx_runtime.jsxs)(CardWrapper,{$hoverEffect:hoverEffect,$backgroundColor:backgroundColor,$borderStyle:borderStyle,$borderColor:borderColor,children:[imageUrl&&(0,jsx_runtime.jsx)(CardImage,{src:imageUrl,alt:"Card image"}),(0,jsx_runtime.jsxs)(CardContent,{$alignText:alignText,children:[(0,jsx_runtime.jsx)("h2",{children:title}),(0,jsx_runtime.jsx)("p",{children:content})]})]})}const Card_Card=Card;Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{title:{required:!0,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"string"},description:""},imageUrl:{required:!1,tsType:{name:"string"},description:""},alignText:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},hoverEffect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""},borderStyle:{required:!1,tsType:{name:"string"},description:""},borderColor:{required:!1,tsType:{name:"string"},description:""}}};const Card_stories={title:"Card",component:Card_Card,argTypes:{imageUrl:{control:"text"},alignText:{control:"radio",options:["left","center","right"]},hoverEffect:{control:"boolean"},backgroundColor:{control:"color"}}},CardInterative=(args=>(0,jsx_runtime.jsx)(Card_Card,{...args})).bind({});CardInterative.args={title:"Interactive Card",content:"This is an interactive card. It can contain images, align text, and even have a hover effect!",hoverEffect:!0,backgroundColor:"#f0f0f0"},CardInterative.parameters={...CardInterative.parameters,docs:{...CardInterative.parameters?.docs,source:{originalSource:"args => <Card {...args} />",...CardInterative.parameters?.docs?.source}}};const __namedExportsOrder=["CardInterative"]}}]);