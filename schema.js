{
  "__schema": {
    "description": null,
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "ENUM",
        "name": "ImageType",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "AVATAR",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "COVER",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "BANNER",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PageInfo",
        "description": null,
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "total",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "perPage",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "currentPage",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "lastPage",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "hasNextPage",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "Int",
        "description": "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "Boolean",
        "description": "The `Boolean` scalar type represents `true` or `false`.",
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "UserMediaStatus",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "CURRENT",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "PLANNING",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "FAVORITE",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UserMediaConnection",
        "description": null,
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "edges",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserMedia",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageInfo",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "IConnection",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "CharacterRole",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "MAIN",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SUPPORTING",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "BACKGROUND",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "UserCharacterStatus",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "FAVORITE",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "FOLLOW",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "HATE",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UserCharacterConnection",
        "description": null,
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "edges",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserCharacter",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageInfo",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "IConnection",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "UserRole",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "OWNER",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ADMIN",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SUPER_ADMIN",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CharacterConnection",
        "description": null,
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "edges",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MediaCharacter",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageInfo",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "IConnection",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "CategoryConnection",
        "description": null,
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "edges",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MediaCategory",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageInfo",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "IConnection",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "MediaType",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "ANIME",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "MANGA",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "MediaSeason",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "WINTER",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SPRING",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SUMMER",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "FALL",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Session",
        "description": null,
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "user",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "token",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "String",
        "description": "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Page",
        "description": null,
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "medias",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "FindMediaInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Media",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "users",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "FindUserInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "User",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "characters",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "FindCharacterInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Character",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "categories",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "FindCategoryInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Category",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "images",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "FindImageInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Image",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageInfo",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INTERFACE",
        "name": "INode",
        "description": null,
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Image",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Character",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "User",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Category",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "Media",
            "ofType": null
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "ID",
        "description": "The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `\"4\"`) or integer (such as `4`) input value will be accepted as an ID.",
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INTERFACE",
        "name": "IEdge",
        "description": null,
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "node",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "INTERFACE",
                "name": "INode",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UserMedia",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "MediaCharacter",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "UserCharacter",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "MediaCategory",
            "ofType": null
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "IConnection",
        "description": null,
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "edges",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INTERFACE",
                    "name": "IEdge",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "pageInfo",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UserMediaConnection",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "UserCharacterConnection",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "CharacterConnection",
            "ofType": null
          },
          {
            "kind": "OBJECT",
            "name": "CategoryConnection",
            "ofType": null
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PaginateMediaInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "page",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": "1",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "perPage",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": "50",
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FindCategoryInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "search",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateCategoryInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateCategoryInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FindCharacterInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "search",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateCharacterInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "age",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateCharacterInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "age",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FindImageInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "search",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateImageInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "title",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "ImageType",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateImageInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "title",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "width",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "height",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mimeType",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "encoding",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "size",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "ImageType",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FindMediaInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "type",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "MediaType",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "search",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "title",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "season",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "MediaSeason",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "categoryIn",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "characterIn",
            "description": null,
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "episodesAmount",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateMediaInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "type",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "MediaType",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "title",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "season",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "MediaSeason",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "episodesAmount",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateMediaInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "MediaType",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "title",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "season",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "MediaSeason",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "episodesAmount",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AddMediaCharacterInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "role",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "CharacterRole",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "characterId",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mediaId",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "RemoveMediaCharacterInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "characterId",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mediaId",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AddMediaCategoryInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "score",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "categoryId",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mediaId",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "RemoveMediaCategoryInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "categoryId",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mediaId",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateSessionInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "email",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "password",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FindUserInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "search",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateUserInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "email",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "password",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "avatarId",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateUserInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "id",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "email",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "avatarId",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ResetPasswordInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "token",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "password",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ToggleFavoriteMediaInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "mediaId",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "userId",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ToggleRecentMediaInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "mediaId",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "userId",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FindUsersMediasInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "userMediaStatus",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "UserMediaStatus",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mediaType",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "MediaType",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "page",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": "1",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "perPage",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": "50",
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateUserMediaInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "mediaId",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "userId",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "userMediaStatus",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "UserMediaStatus",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DeleteUserMediaInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "mediaId",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "userId",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "userMediaStatus",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "UserMediaStatus",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FindUsersCharactersInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "userCharacterStatus",
            "description": null,
            "type": {
              "kind": "ENUM",
              "name": "UserCharacterStatus",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "page",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": "1",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "perPage",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": "50",
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateUserCharacterInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "characterId",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "userId",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "userCharacterStatus",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "UserCharacterStatus",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DeleteUserCharacterInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "characterId",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "userId",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "userCharacterStatus",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "UserCharacterStatus",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PageInput",
        "description": null,
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": [
          {
            "name": "page",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": "1",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "perPage",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "defaultValue": "50",
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Image",
        "description": null,
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fileName",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "title",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "width",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "height",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mimeType",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "encoding",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "size",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "ENUM",
              "name": "ImageType",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "url",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "INode",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UserMedia",
        "description": null,
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "node",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Media",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mediaId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "userId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "userMediaStatus",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "UserMediaStatus",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "IEdge",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "MediaCharacter",
        "description": null,
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "node",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Character",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "role",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "CharacterRole",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mediaId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "characterId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "IEdge",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Character",
        "description": null,
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "age",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "coverImage",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "bannerImage",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isFavorited",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isFollowed",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "coverImageUrl",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "bannerImageUrl",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "INode",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UserCharacter",
        "description": null,
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "node",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Character",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "characterId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "userId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "userCharacterStatus",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "UserCharacterStatus",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "IEdge",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "User",
        "description": null,
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "email",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "password",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "avatarId",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "avatar",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Image",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "roles",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "UserRole",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "userMedias",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "FindUsersMediasInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "UserMediaConnection",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "userCharacters",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "FindUsersCharactersInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCharacterConnection",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "getAvatarUrl",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "INode",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Category",
        "description": null,
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "INode",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "MediaCategory",
        "description": null,
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "node",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Category",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "score",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mediaId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "categoryId",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "IEdge",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Media",
        "description": null,
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "MediaType",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "title",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "season",
            "description": null,
            "args": [],
            "type": {
              "kind": "ENUM",
              "name": "MediaSeason",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "episodesAmount",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "authors",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdById",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdBy",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "coverImage",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "bannerImage",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "categories",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "PaginateMediaInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "CategoryConnection",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "characters",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "PaginateMediaInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "CharacterConnection",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isFavorited",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createdAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updatedAt",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "coverImageUrl",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "bannerImageUrl",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "INode",
            "ofType": null
          }
        ],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "description": null,
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "category",
            "description": null,
            "args": [
              {
                "name": "id",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Category",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "character",
            "description": null,
            "args": [
              {
                "name": "id",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Character",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "image",
            "description": null,
            "args": [
              {
                "name": "id",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Image",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "media",
            "description": null,
            "args": [
              {
                "name": "id",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Media",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "listAuthenticatedUser",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "user",
            "description": null,
            "args": [
              {
                "name": "id",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "page",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "PageInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Page",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "description": null,
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "createCategory",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateCategoryInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Category",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateCategory",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateCategoryInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Category",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteCategory",
            "description": null,
            "args": [
              {
                "name": "id",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Category",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createCharacter",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateCharacterInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Character",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateCharacter",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateCharacterInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Character",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteCharacter",
            "description": null,
            "args": [
              {
                "name": "id",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Character",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateCharacterCoverImage",
            "description": null,
            "args": [
              {
                "name": "file",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Upload",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "characterId",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Character",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateCharacterBannerImage",
            "description": null,
            "args": [
              {
                "name": "file",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Upload",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "characterId",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Character",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createImage",
            "description": null,
            "args": [
              {
                "name": "file",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Upload",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateImageInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Image",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateImage",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateImageInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Image",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteImage",
            "description": null,
            "args": [
              {
                "name": "id",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Image",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createMedia",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateMediaInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Media",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateMedia",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateMediaInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Media",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteMedia",
            "description": null,
            "args": [
              {
                "name": "id",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Media",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "addMediaCharacter",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AddMediaCharacterInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "MediaCharacter",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "removeMediaCharacter",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "RemoveMediaCharacterInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "MediaCharacter",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "addMediaCategory",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "AddMediaCategoryInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "MediaCategory",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "removeMediaCategory",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "RemoveMediaCategoryInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "MediaCategory",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateMediaCoverImage",
            "description": null,
            "args": [
              {
                "name": "file",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Upload",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "mediaId",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Media",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateMediaBannerImage",
            "description": null,
            "args": [
              {
                "name": "file",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Upload",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "mediaId",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Media",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createSession",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateSessionInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Session",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createUser",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateUserInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "updateUser",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateUserInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "sendForgotPasswordEmail",
            "description": null,
            "args": [
              {
                "name": "email",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "resetPassword",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ResetPasswordInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createUserMedia",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateUserMediaInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "UserMedia",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteUserMedia",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteUserMediaInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "UserMedia",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "createUserCharacter",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateUserCharacterInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCharacter",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deleteUserCharacter",
            "description": null,
            "args": [
              {
                "name": "input",
                "description": null,
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "DeleteUserCharacterInput",
                    "ofType": null
                  }
                },
                "defaultValue": null,
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "UserCharacter",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "Upload",
        "description": "The `Upload` scalar type represents a file upload.",
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__Schema",
        "description": "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "types",
            "description": "A list of all types supported by this server.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "queryType",
            "description": "The type that query operations will be rooted at.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "mutationType",
            "description": "If this server supports mutation, the type that mutation operations will be rooted at.",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "__Type",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "subscriptionType",
            "description": "If this server support subscription, the type that subscription operations will be rooted at.",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "__Type",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "directives",
            "description": "A list of all directives supported by this server.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Directive",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__Type",
        "description": "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "kind",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "__TypeKind",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "specifiedByUrl",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "fields",
            "description": null,
            "args": [
              {
                "name": "includeDeprecated",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "defaultValue": "false",
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Field",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "interfaces",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "possibleTypes",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "enumValues",
            "description": null,
            "args": [
              {
                "name": "includeDeprecated",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "defaultValue": "false",
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__EnumValue",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "inputFields",
            "description": null,
            "args": [
              {
                "name": "includeDeprecated",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "defaultValue": "false",
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__InputValue",
                  "ofType": null
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ofType",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "__Type",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "__TypeKind",
        "description": "An enum describing what kind of type a given `__Type` is.",
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "SCALAR",
            "description": "Indicates this type is a scalar.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "OBJECT",
            "description": "Indicates this type is an object. `fields` and `interfaces` are valid fields.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INTERFACE",
            "description": "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UNION",
            "description": "Indicates this type is a union. `possibleTypes` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ENUM",
            "description": "Indicates this type is an enum. `enumValues` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INPUT_OBJECT",
            "description": "Indicates this type is an input object. `inputFields` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "LIST",
            "description": "Indicates this type is a list. `ofType` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "NON_NULL",
            "description": "Indicates this type is a non-null. `ofType` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__Field",
        "description": "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "args",
            "description": null,
            "args": [
              {
                "name": "includeDeprecated",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                },
                "defaultValue": "false",
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__InputValue",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isDeprecated",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deprecationReason",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__InputValue",
        "description": "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "defaultValue",
            "description": "A GraphQL-formatted string representing the default value for this input value.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isDeprecated",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deprecationReason",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__EnumValue",
        "description": "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isDeprecated",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "deprecationReason",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__Directive",
        "description": "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
        "specifiedByUrl": null,
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "isRepeatable",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "locations",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "ENUM",
                    "name": "__DirectiveLocation",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "args",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__InputValue",
                    "ofType": null
                  }
                }
              }
            },
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "__DirectiveLocation",
        "description": "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
        "specifiedByUrl": null,
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "QUERY",
            "description": "Location adjacent to a query operation.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "MUTATION",
            "description": "Location adjacent to a mutation operation.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SUBSCRIPTION",
            "description": "Location adjacent to a subscription operation.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "FIELD",
            "description": "Location adjacent to a field.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "FRAGMENT_DEFINITION",
            "description": "Location adjacent to a fragment definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "FRAGMENT_SPREAD",
            "description": "Location adjacent to a fragment spread.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INLINE_FRAGMENT",
            "description": "Location adjacent to an inline fragment.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "VARIABLE_DEFINITION",
            "description": "Location adjacent to a variable definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SCHEMA",
            "description": "Location adjacent to a schema definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "SCALAR",
            "description": "Location adjacent to a scalar definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "OBJECT",
            "description": "Location adjacent to an object type definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "FIELD_DEFINITION",
            "description": "Location adjacent to a field definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ARGUMENT_DEFINITION",
            "description": "Location adjacent to an argument definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INTERFACE",
            "description": "Location adjacent to an interface definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "UNION",
            "description": "Location adjacent to a union definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ENUM",
            "description": "Location adjacent to an enum definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "ENUM_VALUE",
            "description": "Location adjacent to an enum value definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INPUT_OBJECT",
            "description": "Location adjacent to an input object type definition.",
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "INPUT_FIELD_DEFINITION",
            "description": "Location adjacent to an input object field definition.",
            "isDeprecated": false,
            "deprecationReason": null
          }
        ],
        "possibleTypes": null
      }
    ],
    "directives": [
      {
        "name": "include",
        "description": "Directs the executor to include this field or fragment only when the `if` argument is true.",
        "isRepeatable": false,
        "locations": [
          "FIELD",
          "FRAGMENT_SPREAD",
          "INLINE_FRAGMENT"
        ],
        "args": [
          {
            "name": "if",
            "description": "Included when true.",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ]
      },
      {
        "name": "skip",
        "description": "Directs the executor to skip this field or fragment when the `if` argument is true.",
        "isRepeatable": false,
        "locations": [
          "FIELD",
          "FRAGMENT_SPREAD",
          "INLINE_FRAGMENT"
        ],
        "args": [
          {
            "name": "if",
            "description": "Skipped when true.",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ]
      },
      {
        "name": "deprecated",
        "description": "Marks an element of a GraphQL schema as no longer supported.",
        "isRepeatable": false,
        "locations": [
          "FIELD_DEFINITION",
          "ARGUMENT_DEFINITION",
          "INPUT_FIELD_DEFINITION",
          "ENUM_VALUE"
        ],
        "args": [
          {
            "name": "reason",
            "description": "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "defaultValue": "\"No longer supported\"",
            "isDeprecated": false,
            "deprecationReason": null
          }
        ]
      },
      {
        "name": "specifiedBy",
        "description": "Exposes a URL that specifies the behaviour of this scalar.",
        "isRepeatable": false,
        "locations": [
          "SCALAR"
        ],
        "args": [
          {
            "name": "url",
            "description": "The URL that specifies the behaviour of this scalar.",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ]
      },
      {
        "name": "client",
        "description": "Direct the client to resolve this field locally, either from the cache or local resolvers.",
        "isRepeatable": false,
        "locations": [
          "FIELD",
          "FRAGMENT_DEFINITION",
          "INLINE_FRAGMENT"
        ],
        "args": [
          {
            "name": "always",
            "description": "When true, the client will never use the cache for this value. See\nhttps://www.apollographql.com/docs/react/essentials/local-state/#forcing-resolvers-with-clientalways-true",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ]
      },
      {
        "name": "export",
        "description": "Export this locally resolved field as a variable to be used in the remainder of this query. See\nhttps://www.apollographql.com/docs/react/essentials/local-state/#using-client-fields-as-variables",
        "isRepeatable": false,
        "locations": [
          "FIELD"
        ],
        "args": [
          {
            "name": "as",
            "description": "The variable name to export this field as.",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ]
      },
      {
        "name": "connection",
        "description": "Specify a custom store key for this result. See\nhttps://www.apollographql.com/docs/react/advanced/caching/#the-connection-directive",
        "isRepeatable": false,
        "locations": [
          "FIELD"
        ],
        "args": [
          {
            "name": "key",
            "description": "Specify the store key.",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          },
          {
            "name": "filter",
            "description": "An array of query argument names to include in the generated custom store key.",
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "defaultValue": null,
            "isDeprecated": false,
            "deprecationReason": null
          }
        ]
      }
    ]
  }
}