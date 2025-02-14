"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Transactions",
      [
        {
          id: "6e293349-6f27-4d02-a9d1-464184f02e5c",
          orderId: "47264b7f-7a89-40f6-aa81-a58e6ce633c1",
          userId: "5e6f8d2a-2458-4454-9243-2994134c7e7a",
          transactionAmount: 2,
          paymentMethod: "Crimson",
          status: "Cancelled",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "eab826d2-a3cf-429f-bcc7-e0977237cf7e",
          orderId: "0d150b8c-b9fc-4b1b-a58f-1639dace93cf",
          userId: "e076f190-5c6a-4454-b434-8ae9b8881850",
          transactionAmount: 61,
          paymentMethod: "Aquamarine",
          status: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "0cb1dcde-1e72-4b13-abc6-6b6cfb8f884d",
          orderId: "decc5534-dbb1-4ec4-8301-bd19c6537496",
          userId: "80f78a32-d00d-48b1-8f4c-97d2217e4d1c",
          transactionAmount: 97,
          paymentMethod: "Goldenrod",
          status: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "a85644e2-e4e3-4fb5-b361-51eab04b75d1",
          orderId: "4f5611a3-9914-41ec-ab6c-86ebc813af80",
          userId: "583f8ee9-1bc8-4620-b2ef-1c5f0386ef99",
          transactionAmount: 30,
          paymentMethod: "Pink",
          status: "Cancelled",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "74475108-0d47-4d58-b437-869d602ba098",
          orderId: "d760c856-d856-4def-8fe6-d45b70c101c6",
          userId: "51b309d5-22b9-44b8-82db-fbaebf03f87c",
          transactionAmount: 70,
          paymentMethod: "Crimson",
          status: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "a2283fa3-f6d5-43e2-adad-97b7b258bb53",
          orderId: "6ee78c2b-6d8d-448b-82ae-d2f9836accd9",
          userId: "f116cb57-f849-4df0-8fea-b15d7abe2afb",
          transactionAmount: 41,
          paymentMethod: "Yellow",
          status: "Cancelled",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "9560a549-1072-4e44-b246-a1c6fa3309e4",
          orderId: "3ebfd505-b168-497c-bca2-af15fd9f2bfd",
          userId: "458b9eef-d44b-4103-8f4a-74ac1948e4a1",
          transactionAmount: 65,
          paymentMethod: "Crimson",
          status: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "11ec040c-75be-4af7-a9a4-40f3a0f754cb",
          orderId: "e5baeec3-cb13-42f7-8a9e-259dbcf77e73",
          userId: "a31f3cb6-920a-4590-9242-e4e299804e97",
          transactionAmount: 39,
          paymentMethod: "Violet",
          status: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "66df2307-ad47-47e8-82ba-0f961d896a84",
          orderId: "3e71806a-26eb-4488-97ce-001a3b41fa2c",
          userId: "126e98fa-59b8-40fb-afb4-12ce43ef1d7b",
          transactionAmount: 18,
          paymentMethod: "Red",
          status: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "1abc1dfe-e056-45b2-b791-06d198d74dc9",
          orderId: "44b37f12-5efd-4dba-b855-27ca349ffecb",
          userId: "704c076e-4770-4233-85aa-80d90730ef81",
          transactionAmount: 68,
          paymentMethod: "Indigo",
          status: "Cancelled",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "476b557a-3219-43dd-90f4-c47377fd3436",
          orderId: "42e39752-5248-47ed-b104-b916e190eb8f",
          userId: "4b4e26f5-b67a-45b4-8c6a-aa7f9be42173",
          transactionAmount: 45,
          paymentMethod: "Violet",
          status: "Cancelled",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "cdddf57f-65f0-42a2-b12c-bec7554fd340",
          orderId: "33b5a05a-cec7-46e0-ab08-a532d1dfc35b",
          userId: "e7626a45-a627-4743-91e8-8687d3cd16e1",
          transactionAmount: 55,
          paymentMethod: "Fuscia",
          status: "Cancelled",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "4c8b7623-aefc-46da-8be9-969c177e36fc",
          orderId: "9600ea24-d5f6-4fa0-bca4-607d704cf796",
          userId: "f7d2790d-3ac1-4d89-9de3-1c01f8cd30c1",
          transactionAmount: 70,
          paymentMethod: "Orange",
          status: "Cancelled",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "615d868d-230e-41f3-a53d-48c4bdff84e7",
          orderId: "ff35dbc2-a519-461f-aee4-a632f11892cc",
          userId: "30f6463e-6d09-4202-820e-2b5184bbe99d",
          transactionAmount: 14,
          paymentMethod: "Mauv",
          status: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "784e6198-1463-4b5e-9216-7a3d03b228d4",
          orderId: "70ac2f03-e73d-4d36-a179-a0964c722fe5",
          userId: "e2cac605-d67d-4ad5-8f03-e54c3ea18cf5",
          transactionAmount: 61,
          paymentMethod: "Pink",
          status: "Cancelled",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "32020ba7-7ea9-4238-8acd-0150b1913946",
          orderId: "ffbb519d-260c-4bb2-8fc4-b09193548974",
          userId: "85cd31e8-f414-46ee-8762-ad31a2e2ab01",
          transactionAmount: 64,
          paymentMethod: "Puce",
          status: "Cancelled",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "6db74e45-74ae-41ed-bc76-61d1648bc117",
          orderId: "05457d69-42af-44bb-a60c-f86fd3d573f1",
          userId: "7e6ddc55-1636-46cd-881c-75ce8338c7cc",
          transactionAmount: 33,
          paymentMethod: "Fuscia",
          status: "Pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "88855518-cf26-4a17-a1bd-b99001b11e8e",
          orderId: "c66ecec6-e267-4622-8934-327d6dbe36d7",
          userId: "4d7ed20a-54fe-4047-a35c-cfaabef94e2e",
          transactionAmount: 56,
          paymentMethod: "Goldenrod",
          status: "Cancelled",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "0ee61899-3c29-4177-b2a1-948800d63ea9",
          orderId: "0671d1be-ede6-401f-9f4f-48f74394102d",
          userId: "c1a2888a-f1ed-4fca-a1c5-3fb1065aa35e",
          transactionAmount: 60,
          paymentMethod: "Blue",
          status: "Pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "92954bf4-a5f2-472d-bd71-de2c887f7b7b",
          orderId: "60562a6b-5c25-4c45-8b37-350037f021be",
          userId: "987bae85-9b10-4a85-8fc9-92dde8fd5b57",
          transactionAmount: 48,
          paymentMethod: "Green",
          status: "Cancelled",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "a5a81e3a-2bc8-4ff7-946a-31ad549aa479",
          orderId: "3cfae16a-69c8-42e4-89b7-5c5abe592f46",
          userId: "5e6f8d2a-2458-4454-9243-2994134c7e7a",
          transactionAmount: 46,
          paymentMethod: "Puce",
          status: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "3d697b64-e4ad-47b7-a6b6-924ec7d5754d",
          orderId: "13cd7470-ff4c-402b-8bbb-5203f608ef3a",
          userId: "e076f190-5c6a-4454-b434-8ae9b8881850",
          transactionAmount: 19,
          paymentMethod: "Indigo",
          status: "Cancelled",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "a5bd6a17-1281-4c1c-8e5d-fd2ebe9d5a44",
          orderId: "30d6123c-acd1-49e9-b384-87f7d16187db",
          userId: "80f78a32-d00d-48b1-8f4c-97d2217e4d1c",
          transactionAmount: 63,
          paymentMethod: "Khaki",
          status: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "b3cd1f5e-e234-4097-8054-51ca3d072f12",
          orderId: "7dc568a7-38aa-4d6c-90c3-d8462b189207",
          userId: "583f8ee9-1bc8-4620-b2ef-1c5f0386ef99",
          transactionAmount: 69,
          paymentMethod: "Khaki",
          status: "Cancelled",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "92a07e1e-c24d-4388-9bd0-25cda9979833",
          orderId: "bd3ae379-b418-46c2-8047-4e77d306f649",
          userId: "51b309d5-22b9-44b8-82db-fbaebf03f87c",
          transactionAmount: 35,
          paymentMethod: "Goldenrod",
          status: "Pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "60e70283-9a0d-4aee-b311-2a8ede0fa70f",
          orderId: "08c5dc0c-80be-4389-a1c9-71e09efa6079",
          userId: "f116cb57-f849-4df0-8fea-b15d7abe2afb",
          transactionAmount: 70,
          paymentMethod: "Turquoise",
          status: "Cancelled",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "8e71cde9-10e4-489e-a6ab-2bfb0bfc4551",
          orderId: "d55a2972-0e26-4941-8e64-b792e8ba92d0",
          userId: "458b9eef-d44b-4103-8f4a-74ac1948e4a1",
          transactionAmount: 80,
          paymentMethod: "Puce",
          status: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "e2ed1fdd-fabc-4a8d-85e2-7780c4c46e4f",
          orderId: "8c71f71e-a1c6-4857-8b33-7b3733761820",
          userId: "a31f3cb6-920a-4590-9242-e4e299804e97",
          transactionAmount: 51,
          paymentMethod: "Green",
          status: "Pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "f871131b-7fdf-498a-895e-75ae9420cebf",
          orderId: "2fb37339-69c0-47ef-9810-0d02875571a4",
          userId: "126e98fa-59b8-40fb-afb4-12ce43ef1d7b",
          transactionAmount: 83,
          paymentMethod: "Fuscia",
          status: "Cancelled",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "717e8445-797b-4457-812d-32d84f89b819",
          orderId: "e4e517ad-1a3c-4117-924f-9a77b90d8eb8",
          userId: "704c076e-4770-4233-85aa-80d90730ef81",
          transactionAmount: 8,
          paymentMethod: "Teal",
          status: "Pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "a829a502-7cec-4b96-bc98-524071713d4a",
          orderId: "991343b3-7f75-40fc-b3a7-89c114011544",
          userId: "4b4e26f5-b67a-45b4-8c6a-aa7f9be42173",
          transactionAmount: 54,
          paymentMethod: "Teal",
          status: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "1b153218-8d59-4ec2-8956-53460c054e56",
          orderId: "df7df903-fcc5-415e-98d7-51c29d73eef4",
          userId: "e7626a45-a627-4743-91e8-8687d3cd16e1",
          transactionAmount: 80,
          paymentMethod: "Orange",
          status: "Pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "7a9aac42-86d0-41f2-864f-58fd759294a5",
          orderId: "a8f353a3-ab84-4347-9220-bdbdb585ddd4",
          userId: "f7d2790d-3ac1-4d89-9de3-1c01f8cd30c1",
          transactionAmount: 26,
          paymentMethod: "Green",
          status: "Pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "354172f6-34cc-4e36-a33c-c4e527eceee2",
          orderId: "57bd4a76-19a5-4dbd-88a1-9e6c04e87f17",
          userId: "30f6463e-6d09-4202-820e-2b5184bbe99d",
          transactionAmount: 36,
          paymentMethod: "Blue",
          status: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "bbfec073-e0e0-41bb-8a6d-a57d9c73c005",
          orderId: "bbd580b9-3661-4a92-9d19-a30eba5e9667",
          userId: "e2cac605-d67d-4ad5-8f03-e54c3ea18cf5",
          transactionAmount: 29,
          paymentMethod: "Red",
          status: "Pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "e1a7fda8-f0c9-434e-b3e1-10b96d7e32b0",
          orderId: "eec97064-2a56-4846-b360-a49dc90510b8",
          userId: "85cd31e8-f414-46ee-8762-ad31a2e2ab01",
          transactionAmount: 48,
          paymentMethod: "Green",
          status: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "1b257771-44f9-48d0-938a-375b903e07e2",
          orderId: "2a8ede32-f256-45a2-8350-f4038a918bfb",
          userId: "7e6ddc55-1636-46cd-881c-75ce8338c7cc",
          transactionAmount: 32,
          paymentMethod: "Indigo",
          status: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "7502a1a3-f4ae-4962-a533-837b3abf0571",
          orderId: "d9b9e4ad-c33c-445d-8219-bdddb36bca23",
          userId: "4d7ed20a-54fe-4047-a35c-cfaabef94e2e",
          transactionAmount: 13,
          paymentMethod: "Mauv",
          status: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "bdd6f99c-a3ed-4b27-9036-844fd19cd846",
          orderId: "b6155d8c-630c-4279-99cf-01019cfdaa58",
          userId: "c1a2888a-f1ed-4fca-a1c5-3fb1065aa35e",
          transactionAmount: 85,
          paymentMethod: "Orange",
          status: "Cancelled",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "bac0f6ac-028d-4209-8e77-767c8991cc7e",
          orderId: "3195ddbe-f2ea-455b-a672-9d5d7813d17b",
          userId: "987bae85-9b10-4a85-8fc9-92dde8fd5b57",
          transactionAmount: 59,
          paymentMethod: "Pink",
          status: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "c15af04f-bbc3-479c-aa05-f43d9e946773",
          orderId: "ffd967a6-5233-4ee9-8566-48c2f82d3ec2",
          userId: "5e6f8d2a-2458-4454-9243-2994134c7e7a",
          transactionAmount: 65,
          paymentMethod: "Green",
          status: "Pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "472b873e-4a80-4cef-a04f-1cc491cac7f5",
          orderId: "ee83ff42-481c-4434-9369-dff0e4d9ba13",
          userId: "e076f190-5c6a-4454-b434-8ae9b8881850",
          transactionAmount: 81,
          paymentMethod: "Puce",
          status: "Cancelled",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "aa27ec40-230a-4205-9edb-d4e0a3b3c072",
          orderId: "f5e0d239-5191-48d2-99dd-1abaf0901820",
          userId: "80f78a32-d00d-48b1-8f4c-97d2217e4d1c",
          transactionAmount: 42,
          paymentMethod: "Khaki",
          status: "Pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "1069a772-bbe6-44f2-bed2-58ca1efbceea",
          orderId: "ba6eb846-08ec-404d-adf8-d3a6cfa45a65",
          userId: "583f8ee9-1bc8-4620-b2ef-1c5f0386ef99",
          transactionAmount: 8,
          paymentMethod: "Puce",
          status: "Cancelled",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "5c3c6914-66af-4595-91dc-577fd7cca8d8",
          orderId: "dbe23891-966e-4883-a810-bd1da9c7f14e",
          userId: "51b309d5-22b9-44b8-82db-fbaebf03f87c",
          transactionAmount: 83,
          paymentMethod: "Green",
          status: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d1894218-5ddc-4f24-a3ba-87cde911454c",
          orderId: "d51bc9bd-2bde-46bd-bc6c-470fa2b071d2",
          userId: "f116cb57-f849-4df0-8fea-b15d7abe2afb",
          transactionAmount: 75,
          paymentMethod: "Pink",
          status: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "cb2b6313-5e57-48ed-9d2a-743b27e6444a",
          orderId: "b7dfc992-c711-4347-83a9-f98a948373a8",
          userId: "458b9eef-d44b-4103-8f4a-74ac1948e4a1",
          transactionAmount: 59,
          paymentMethod: "Orange",
          status: "Cancelled",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "71cfa431-a613-43b3-a1ee-2230cc173428",
          orderId: "cacc4d09-a5b5-4f67-b1bb-f798bc85a337",
          userId: "a31f3cb6-920a-4590-9242-e4e299804e97",
          transactionAmount: 94,
          paymentMethod: "Khaki",
          status: "Pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "3bdaaf4f-b582-404c-836c-59b63a1a0ec3",
          orderId: "a8b434b4-ca33-4a41-99a7-95583050003f",
          userId: "126e98fa-59b8-40fb-afb4-12ce43ef1d7b",
          transactionAmount: 54,
          paymentMethod: "Crimson",
          status: "Pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "39fd7241-1871-43e8-85af-204648964099",
          orderId: "3dfa0081-5a0b-4c12-ad9f-26cfe8dbd1aa",
          userId: "704c076e-4770-4233-85aa-80d90730ef81",
          transactionAmount: 93,
          paymentMethod: "Puce",
          status: "Cancelled",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Transactions", null, {});
  },
};
