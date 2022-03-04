const respFromApi = {
  menuList: [
    {
      menuId: "PIMS_PRODUCT",
      menuNm: "상품",
      leafYn: "N",
      subMenu: [
        {
          menuId: "PIMS_PRD",
          menuNm: "상품관리",
          leafYn: "N",
          subMenu: [
            {
              menuId: "PIMS_PRD_1",
              menuNm: "상품정보관리",
              leafYn: "Y",
              subMenu: null,
            },
            {
              menuId: "PIMS_PRD_2",
              menuNm: "상품정보일괄등록",
              leafYn: "Y",
              subMenu: null,
            },
            {
              menuId: "PIMS_PRD_3",
              menuNm: "Mall상품정보관리",
              leafYn: "Y",
              subMenu: null,
            },
            {
              menuId: "PIMS_PRD_4",
              menuNm: "I/F결과관리",
              leafYn: "Y",
              subMenu: null,
            },
          ],
        },
        {
          menuId: "PIMS_ATTR",
          menuNm: "속성관리",
          leafYn: "N",
          subMenu: [
            {
              menuId: "PIMS_ATTR_1",
              menuNm: "속성정보관리",
              leafYn: "Y",
              subMenu: null,
            },
            {
              menuId: "PIMS_ATTR_2",
              menuNm: "고시정보관리",
              leafYn: "Y",
              subMenu: null,
            },
          ],
        },
      ],
    },
    {
      menuId: "PIMS_PLATFORM",
      menuNm: "검색",
      leafYn: "N",
      subMenu: [
        {
          menuId: "PIMS_PLATFORM_DIC",
          menuNm: "사전관리",
          leafYn: "N",
          subMenu: [
            {
              menuId: "PIMS_PLATFORM_DIC_1",
              menuNm: "동의어사전",
              leafYn: "Y",
              subMenu: null,
            },
            {
              menuId: "PIMS_PLATFORM_DIC_2",
              menuNm: "사용자사전",
              leafYn: "Y",
              subMenu: null,
            },
            {
              menuId: "PIMS_PLATFORM_DIC_3",
              menuNm: "동기화정보",
              leafYn: "Y",
              subMenu: null,
            },
          ],
        },
        {
          menuId: "PIMS_PLATFORM_SEARCHTEST",
          menuNm: "검색 테스트 도구",
          leafYn: "Y",
          subMenu: null,
        },
        {
          menuId: "PIMS_PLATFORM_AUTOCOMPLETE",
          menuNm: "자동완성 관리자도구",
          leafYn: "Y",
          subMenu: null,
        },
      ],
    },
    {
      menuId: "PIMS_REVIEW",
      menuNm: "리뷰",
      leafYn: "N",
      subMenu: [
        {
          menuId: "PIMS_REVIEW_DIC1",
          menuNm: "동의어사전",
          leafYn: "Y",
          subMenu: null,
        },
        {
          menuId: "PIMS_REVIEW_DIC2",
          menuNm: "사용자사전사전",
          leafYn: "Y",
          subMenu: null,
        },
      ],
    },
    {
      menuId: "PIMS_SOCIALBUZZ",
      menuNm: "소셜버즈",
      leafYn: "N",
      subMenu: [
        {
          menuId: "PIMS_SOCIALBUZZ_DIC1",
          menuNm: "동의어사전",
          leafYn: "Y",
          subMenu: null,
        },
        {
          menuId: "PIMS_SOCIALBUZZ_DIC2",
          menuNm: "사용자사전사전",
          leafYn: "Y",
          subMenu: null,
        },
      ],
    },
    {
      menuId: "BCM",
      menuNm: "BCM",
      leafYn: "N",
      subMenu: [
        {
          menuId: "BCM_DIAG",
          menuNm: "진단구성관리",
          leafYn: "N",
          subMenu: [
            {
              menuId: "BCM_DIAG_1",
              menuNm: "진단질문구성",
              leafYn: "Y",
              subMenu: null,
            },
            {
              menuId: "BCM_DIAG_2",
              menuNm: "진단질문구성",
              leafYn: "Y",
              subMenu: null,
            },
          ],
        },
        {
          menuId: "BCM_BEAUTYTIP",
          menuNm: "뷰티팁관리",
          leafYn: "Y",
          subMenu: null,
        },
        {
          menuId: "BCM_DIAGRSLT",
          menuNm: "진단결과 화면 관리",
          leafYn: "Y",
          subMenu: null,
        },
        {
          menuId: "BCM_USERRSLT",
          menuNm: "사용자 결과 관리",
          leafYn: "Y",
          subMenu: null,
        },
        {
          menuId: "BCM_TERM",
          menuNm: "약관 화면 관리",
          leafYn: "Y",
          subMenu: null,
        },
        {
          menuId: "BCM_ARMAKEUP",
          menuNm: "AR메이크업",
          leafYn: "N",
          subMenu: [
            {
              menuId: "BCM_ARMAKEUP_1",
              menuNm: "퍼펙트 상품 관리",
              leafYn: "Y",
              subMenu: null,
            },
          ],
        },
        {
          menuId: "BCM_BESPOKE",
          menuNm: "Bespoke관리",
          leafYn: "N",
          subMenu: [
            {
              menuId: "BCM_BESPOKE_1",
              menuNm: "API Key 관리",
              leafYn: "Y",
              subMenu: null,
            },
          ],
        },
      ],
    },
    {
      menuId: "DBPA",
      menuNm: "가격조정",
      leafYn: "N",
      subMenu: [
        {
          menuId: "DBPA_RST",
          menuNm: "가격 할인율 조회",
          leafYn: "Y",
          subMenu: null,
        },
        {
          menuId: "DBPA_CALC",
          menuNm: "가격 할인율 계산",
          leafYn: "Y",
          subMenu: null,
        },
      ],
    },
    {
      menuId: "ADNIN",
      menuNm: "관리자 관리",
      leafYn: "N",
      subMenu: [
        {
          menuId: "ADMIN_USER",
          menuNm: "사용자 조회",
          leafYn: "Y",
          subMenu: null,
        },
        {
          menuId: "ADMIN_LOCK",
          menuNm: "잠금해제관리",
          leafYn: "Y",
          subMenu: null,
        },
      ],
    },
  ],
}

const convertedData = [
  {
    id: "pims",
    title: "PIMS",
    type: "group",
    children: [
      {
        id: "PIMS_PRD",
        title: "상품관리",
        translate: "상품관리",
        type: "collapse",
        icon: "",
        children: [
          {
            id: "PIMS_PRD_1",
            title: "상품정보관리",
            type: "item",
            url: "/pip/product1",
          },
          {
            id: "PIMS_PRD_2",
            title: "상품정보일괄등록",
            type: "item",
            url: "/pip/productExcelUpload",
          },
          {
            id: "PIMS_PRD_3",
            title: "Mall상품정보관리",
            type: "item",
            url: "/pip/mallProduct",
          },
          {
            id: "PIMS_PRD_4",
            title: "I/F결과관리",
            type: "item",
            url: "/pip/interfaceResult",
          },
        ],
      },
      {
        id: "PIMS_ATTR",
        title: "속성관리",
        translate: "속성관리",
        type: "collapse",
        icon: "",
        children: [
          {
            id: "PIMS_ATTR_1",
            title: "속성정보관리",
            type: "item",
            url: "/pip/attributes/productAttribute",
          },
          {
            id: "PIMS_ATTR_2",
            title: "고시정보관리",
            type: "item",
            url: "/pip/officialAnnouncement-items/productOfanItem",
          },
        ],
      },
      {
        id: "PIMS_PLATFORM",
        title: "검색",
        translate: "검색",
        type: "collapse",
        icon: "",
        children: [
          {
            id: "PIMS_PLATFORM_DIC",
            title: "사전관리",
            type: "collapse",
            children: [
              {
                id: "PIMS_PLATFORM_DIC_1",
                title: "동의어사전",
                type: "item",
                url: "/dctr/snnmDctrList",
              },
              {
                id: "PIMS_PLATFORM_DIC_2",
                title: "사용자사전",
                type: "item",
                url: "/dctr/userDctrList",
              },
              {
                id: "PIMS_PLATFORM_DIC_3",
                title: "동기화정보",
                type: "item",
                url: "/dctr/snchInfrList",
              },
            ],
          },
          {
            id: "PIMS_PLATFORM_SEARCHTEST",
            title: "검색 테스트 도구",
            type: "item",
            url: "/srch/srchTestTool",
          },
          {
            id: "PIMS_PLATFORM_AUTOCOMPLETE",
            title: "자동완성 관리자도구",
            type: "item",
            url: "/autoComplete/autoCompleteList",
          },
        ],
      },
      {
        id: "PIMS_REVIEW",
        title: "리뷰",
        translate: "리뷰",
        type: "collapse",
        icon: "",
        children: [
          {
            id: "PIMS_REVIEW_DIC1",
            title: "동의어사전",
            type: "item",
            url: "/rv/snnmDctrList",
          },
          {
            id: "PIMS_REVIEW_DIC2",
            title: "사용자사전사전",
            type: "item",
            url: "/rv/userDctrList",
          },
        ],
      },
      {
        id: "PIMS_SOCIALBUZZ",
        title: "소셜버즈",
        translate: "소셜버즈",
        type: "collapse",
        icon: "",
        children: [
          {
            id: "PIMS_SOCIALBUZZ_DIC1",
            title: "동의어사전",
            type: "item",
            url: "/scbz/snnmDctrList",
          },
          {
            id: "PIMS_SOCIALBUZZ_DIC2",
            title: "사용자사전사전",
            type: "item",
            url: "/scbz/userDctrList",
          },
        ],
      },
    ],
  },
  {
    id: "bcm",
    title: "BCM",
    type: "group",
    children: [
      {
        id: "BCM_DIAG",
        title: "진단구성관리",
        type: "collapse",
        children: [
          {
            id: "BCM_DIAG_1",
            title: "진단질문구성",
            type: "item",
            url: "/dummy/url/BCM_DIAG_1",
          },
          {
            id: "BCM_DIAG_2",
            title: "진단질문구성",
            type: "item",
            url: "/dummy/url/BCM_DIAG_2",
          },
        ],
      },
      {
        id: "BCM_BEAUTYTIP",
        title: "뷰티팁관리",
        type: "item",
        url: "/dummy/url/BCM_BEAUTYTIP",
      },
      {
        id: "BCM_DIAGRSLT",
        title: "진단결과 화면 관리",
        type: "item",
        url: "/dummy/url/BCM_DIAGRSLT",
      },
      {
        id: "BCM_USERRSLT",
        title: "사용자 결과 관리",
        type: "item",
        url: "/dummy/url/BCM_USERRSLT",
      },
      {
        id: "BCM_TERM",
        title: "약관 화면 관리",
        type: "item",
        url: "/dummy/url/BCM_TERM",
      },
      {
        id: "BCM_ARMAKEUP",
        title: "AR메이크업",
        type: "collapse",
        children: [
          {
            id: "BCM_ARMAKEUP_1",
            title: "퍼펙트 상품 관리",
            type: "item",
            url: "/dummy/url/BCM_ARMAKEUP_1",
          },
        ],
      },
      {
        id: "BCM_BESPOKE",
        title: "Bespoke관리",
        type: "collapse",
        children: [
          {
            id: "BCM_BESPOKE_1",
            title: "API Key 관리",
            type: "item",
            url: "/dummy/url/BCM_BESPOKE_1",
          },
        ],
      },
    ],
  },
  {
    id: "dbpa",
    title: "DBPA",
    type: "group",
    children: [
      {
        id: "DBPA_RST",
        title: "가격 할인율 조회",
        type: "item",
        url: "/dummy/url/DBPA_RST",
      },
      {
        id: "DBPA_CALC",
        title: "가격 할인율 계산",
        type: "item",
        url: "/dummy/url/DBPA_CALC",
      },
    ],
  },
  {
    id: "adnin",
    title: "ADNIN",
    type: "group",
    children: [
      {
        id: "ADMIN_USER",
        title: "사용자 조회",
        type: "item",
        url: "/dummy/url/ADMIN_USER",
      },
      {
        id: "ADMIN_LOCK",
        title: "잠금해제관리",
        type: "item",
        url: "/dummy/url/ADMIN_LOCK",
      },
    ],
  },
]

// this field is miss from dbs
const managerManagement = {
  id: "MANAGER_MANAGEMENT",
  title: "관리자관리",
  translate: "관리자관리",
  type: "collapse",
  icon: "",
  children: [
    {
      id: "PIMS_SOCIALBUZZ_DIC1",
      title: "관리자 관리",
      type: "item",
      url: "/pip/user",
    },
    {
      id: "PIMS_SOCIALBUZZ_DIC2",
      title: "계정 잠금 해제 관리",
      type: "item",
      url: "/pip/userLockHistory",
    },
  ],
}

export default {
  respFromApi,
  convertedData,
  managerManagement,
}
