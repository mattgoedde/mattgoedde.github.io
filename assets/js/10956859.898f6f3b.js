"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[559],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6697:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={},i="Fluent Validations",l={unversionedId:"snippets/fluent-validations",id:"snippets/fluent-validations",title:"Fluent Validations",description:"AutoMapper Mapped Validator",source:"@site/docs/snippets/fluent-validations.md",sourceDirName:"snippets",slug:"/snippets/fluent-validations",permalink:"/docs/snippets/fluent-validations",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Azure Functions",permalink:"/docs/snippets/azure-functions"},next:{title:"LINQ",permalink:"/docs/snippets/linq"}},p={},s=[{value:"AutoMapper Mapped Validator",id:"automapper-mapped-validator",level:2},{value:"Two classes with no inherited relation",id:"two-classes-with-no-inherited-relation",level:4},{value:"A validator for one of the classes",id:"a-validator-for-one-of-the-classes",level:4},{value:"An AutoMapper Profile",id:"an-automapper-profile",level:4},{value:"A &#39;Mapped Validator&#39;",id:"a-mapped-validator",level:4},{value:"Dependency Injection Container Configuration",id:"dependency-injection-container-configuration",level:4},{value:"Usage",id:"usage",level:4}],d={toc:s},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fluent-validations"},"Fluent Validations"),(0,r.kt)("h2",{id:"automapper-mapped-validator"},"AutoMapper Mapped Validator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Given a class ",(0,r.kt)("inlineCode",{parentName:"li"},"Foo")," and another class ",(0,r.kt)("inlineCode",{parentName:"li"},"Bar"),", who are related but do not inherit from a common parent, we can use ",(0,r.kt)("a",{parentName:"li",href:"https://automapper.org/"},"AutoMapper")," to convert from one to another. "),(0,r.kt)("li",{parentName:"ul"},"When using ",(0,r.kt)("a",{parentName:"li",href:"https://docs.fluentvalidation.net/en/latest/#"},"FluentValidations")," to validate ",(0,r.kt)("inlineCode",{parentName:"li"},"Foo"),", we may also want to validate ",(0,r.kt)("inlineCode",{parentName:"li"},"Bar"),". "),(0,r.kt)("li",{parentName:"ul"},"We need to either create a validator for ",(0,r.kt)("inlineCode",{parentName:"li"},"Bar")," (which may be identical to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Foo")," validator), or first map ",(0,r.kt)("inlineCode",{parentName:"li"},"Bar")," => ",(0,r.kt)("inlineCode",{parentName:"li"},"Foo")," and then validate. "),(0,r.kt)("li",{parentName:"ul"},"Using FluentValidation's ",(0,r.kt)("inlineCode",{parentName:"li"},"Transform()")," method, we are able to abide by the DRY rule.")),(0,r.kt)("h4",{id:"two-classes-with-no-inherited-relation"},"Two classes with no inherited relation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public class Foo\n{\n    string Name { get; set; }\n}\n\npublic class Bar\n{\n    string Name { get; set; }\n}\n")),(0,r.kt)("h4",{id:"a-validator-for-one-of-the-classes"},"A validator for one of the classes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'public class FooValidator : AbstractValidator<Foo>\n{\n    public FooValidator()\n    {\n        RuleFor(f => f.Name)\n            .NotEmpty()\n            .WithMessage("Name must not be empty");\n    }\n}\n')),(0,r.kt)("h4",{id:"an-automapper-profile"},"An AutoMapper Profile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public class AutoMapperProfile : Profile\n{\n    public AutoMapperProfile()\n    {\n        CreateMap<Foo, Bar>().ReverseMap();\n    }\n}\n")),(0,r.kt)("h4",{id:"a-mapped-validator"},"A 'Mapped Validator'"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public class MappedValidator<TSource, TDestination> : AbstractValidator<TSource>\n{\n    public MappedValidator(IMapper mapper, IValidator<TDestination> validator)\n    {\n        Transform(from: viewModel => viewModel, to: viewModel => mapper.Map<TSource, TDestination>(viewModel))\n            .SetValidator(validator);\n    }\n}\n")),(0,r.kt)("h4",{id:"dependency-injection-container-configuration"},"Dependency Injection Container Configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"    services\n        .AddAutoMapper(typeof(AutoMapperProfile))\n        .AddScoped<IValidator<Foo>, FooValidator>()\n        .AddScoped<IValidator<Bar>, MappedValidator<Bar, Foo>>()\n\n")),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Consumers may now inject either ",(0,r.kt)("inlineCode",{parentName:"li"},"IValidator<Foo>")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"IValidator<Bar>"),"."),(0,r.kt)("li",{parentName:"ul"},"Either injection will use the rules from ",(0,r.kt)("inlineCode",{parentName:"li"},"FooValidator : AbstractValidator<Foo>")," after mapping ",(0,r.kt)("inlineCode",{parentName:"li"},"Bar")," => ",(0,r.kt)("inlineCode",{parentName:"li"},"Foo"))))}u.isMDXComponent=!0}}]);