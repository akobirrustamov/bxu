import React, { useEffect, useState } from "react";
import Sidebar from "./../Sidebar";
import newbg from "./../images/newbg.jpg";
import ApiCallBuxpxti from "../../config/ApiCallBxu";
import ApiCall from "../../config/index"
function Group() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("Sirtqi bo'lim");
  const items = [
    {
      id: 113,
      name: "S2-24 MT",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 10,
        code: "60110200",
        name: "Maktabgacha ta’lim",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 49,
    },
    {
      id: 112,
      name: "S4-21 AP",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 6,
        code: "60310900",
        name: "Psixologiya (amaliy psixologiya)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 6,
    },
    {
      id: 110,
      name: "S3-22 PSI",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 8,
        code: "60310900",
        name: "Psixologiya (faoliyat turlari bo‘yicha)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 15,
    },
    {
      id: 108,
      name: "2-23 BT",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 16,
        code: "60110500",
        name: "Boshlang‘ich ta’lim",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 25,
    },
    {
      id: 107,
      name: "S3-22 MuzT",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 11,
        code: "60111300",
        name: "Musiqa ta’limi",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 18,
    },
    {
      id: 105,
      name: "S2-22 MuzT",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 11,
        code: "60111300",
        name: "Musiqa ta’limi",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 18,
    },
    {
      id: 104,
      name: "S1-23 JM",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 56,
        code: "60112200",
        name: "Jismoniy madaniyat",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 76,
    },
    {
      id: 103,
      name: "S1-23 BT",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 9,
        code: "60110500",
        name: "Boshlang‘ich ta’lim",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 75,
    },
    {
      id: 102,
      name: "S1-23 MUZ",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 11,
        code: "60111300",
        name: "Musiqa ta’limi",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 74,
    },
    {
      id: 101,
      name: "S3-23 IQT",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 13,
        code: "60310100",
        name: "Iqtisodiyot (tarmoqlar va sohalar bo‘yicha)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 31,
    },
    {
      id: 100,
      name: "M1-22 JM",
      department: {
        id: 13,
        name: "Magistratura bo'limi",
        code: "438-103",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 55,
        code: "70112201",
        name: "Jismoniy tarbiya va sport mashg‘ulotlari nazariyasi va metodikasi",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 73,
    },
    {
      id: 98,
      name: "M1-22 MUZ",
      department: {
        id: 13,
        name: "Magistratura bo'limi",
        code: "438-103",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 54,
        code: "70111301",
        name: "Musiqa ta’limi va san’at",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 72,
    },
    {
      id: 97,
      name: "M1-23 MUZ",
      department: {
        id: 13,
        name: "Magistratura bo'limi",
        code: "438-103",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 54,
        code: "70111301",
        name: "Musiqa ta’limi va san’at",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 55,
    },
    {
      id: 95,
      name: "M1-23 JM",
      department: {
        id: 13,
        name: "Magistratura bo'limi",
        code: "438-103",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 44,
        code: "70111201",
        name: "Jismoniy tarbiya va sport mashgʻulotlari nazariyasi va metodikasi",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 64,
    },
    {
      id: 94,
      name: "S2-24 IQT",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 36,
        code: "60410100",
        name: "Iqtisodiyot",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 48,
    },
    {
      id: 93,
      name: "S2-24 PSI",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 41,
        code: "60310300",
        name: "Psixologiya",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 47,
    },
    {
      id: 92,
      name: "S1-24 MUZ",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 53,
        code: "60110600",
        name: "Musiqa taʼlimi",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 63,
    },
    {
      id: 90,
      name: "S1-24 ATT",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 27,
        code: "60610100",
        name: "Axborot tizimlari va texnologiyalari",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 51,
    },
    {
      id: 89,
      name: "S1-24 Tarix",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 42,
        code: "60220300",
        name: "Tarix",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 50,
    },
    {
      id: 88,
      name: "S1-24 MT",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 10,
        code: "60110200",
        name: "Maktabgacha ta’lim",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 49,
    },
    {
      id: 87,
      name: "S1-24 IQT",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 36,
        code: "60410100",
        name: "Iqtisodiyot",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 48,
    },
    {
      id: 86,
      name: "S1-24 PSI",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 41,
        code: "60310300",
        name: "Psixologiya",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 47,
    },
    {
      id: 85,
      name: "S1-24 MIG`",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 39,
        code: "60111100",
        name: "Milliy gʻoya, maʼnaviyat asoslari va huquq taʼlimi",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 44,
    },
    {
      id: 84,
      name: "S1-24 TUR",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 34,
        code: "61010100",
        name: "Turizm va mehmondoʻstlik",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 40,
    },
    {
      id: 82,
      name: "3-24 XTA",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 38,
        code: "60110900",
        name: "Xorijiy til va adabiyoti (ingliz tili)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 43,
    },
    {
      id: 81,
      name: "2-24 XTA",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 38,
        code: "60110900",
        name: "Xorijiy til va adabiyoti (ingliz tili)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 43,
    },
    {
      id: 80,
      name: "1-24 JM",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 24,
        code: "60111200",
        name: "Jismoniy madaniyat",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 52,
    },
    {
      id: 79,
      name: "1-24 PSI",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 40,
        code: "60310300",
        name: "Psixologiya",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 46,
    },
    {
      id: 78,
      name: "1-24 O`TA",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 37,
        code: "60110700",
        name: "Oʻzbek tili va adabiyoti",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 42,
    },
    {
      id: 77,
      name: "1-24 IQT",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 35,
        code: "60410100",
        name: "Iqtisodiyot",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 41,
    },
    {
      id: 75,
      name: "1-24 MT",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 15,
        code: "60110200",
        name: "Maktabgacha ta’lim",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 38,
    },
    {
      id: 74,
      name: "1-24 MPL",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 32,
        code: "60110300",
        name: "Maxsus pedagogika: logopediya",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 37,
    },
    {
      id: 73,
      name: "1-24 BT",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 30,
        code: "60110400",
        name: "Boshlangʻich taʼlim",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 35,
    },
    {
      id: 71,
      name: "1-24 ATT",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 26,
        code: "60610100",
        name: "Axborot tizimlari va texnologiyalari",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 33,
    },
    {
      id: 70,
      name: "M1-24 PED",
      department: {
        id: 13,
        name: "Magistratura bo'limi",
        code: "438-103",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 50,
        code: "70110101",
        name: "Pedagogika nazariyasi va tarixi",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 60,
    },
    {
      id: 69,
      name: "M1-24 MUZ",
      department: {
        id: 13,
        name: "Magistratura bo'limi",
        code: "438-103",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 49,
        code: "70110601",
        name: "Musiqa taʼlimi va sanʼat",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 59,
    },
    {
      id: 68,
      name: "M1-24 PSI",
      department: {
        id: 13,
        name: "Magistratura bo'limi",
        code: "438-103",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 46,
        code: "70310301",
        name: "Psixologiya",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 56,
    },
    {
      id: 67,
      name: "M1-24 IQT",
      department: {
        id: 13,
        name: "Magistratura bo'limi",
        code: "438-103",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 43,
        code: "70410102",
        name: "Iqtisodiyot",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 53,
    },
    {
      id: 66,
      name: "M1-24 JM",
      department: {
        id: 13,
        name: "Magistratura bo'limi",
        code: "438-103",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 44,
        code: "70111201",
        name: "Jismoniy tarbiya va sport mashgʻulotlari nazariyasi va metodikasi",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 54,
    },
    {
      id: 65,
      name: "1-24 XTA",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 38,
        code: "60110900",
        name: "Xorijiy til va adabiyoti (ingliz tili)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 43,
    },
    {
      id: 64,
      name: "M1-24 O`TA",
      department: {
        id: 13,
        name: "Magistratura bo'limi",
        code: "438-103",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 48,
        code: "70110701",
        name: "Oʻzbek tili va adabiyoti",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 58,
    },
    {
      id: 63,
      name: "1-24 MUZ",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 31,
        code: "60110600",
        name: "Musiqa taʼlimi",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 36,
    },
    {
      id: 62,
      name: "M1-24 BT",
      department: {
        id: 13,
        name: "Magistratura bo'limi",
        code: "438-103",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 47,
        code: "70110401",
        name: "Taʼlim va tarbiya nazariyasi va metodikasi (boshlangʻich taʼlim)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 57,
    },
    {
      id: 61,
      name: "1-24 MIG'",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 25,
        code: "60111100",
        name: "Milliy gʻoya, maʼnaviyat asoslari va huquq taʼlimi",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 45,
    },
    {
      id: 60,
      name: "M1-24 L",
      department: {
        id: 13,
        name: "Magistratura bo'limi",
        code: "438-103",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 45,
        code: "70230101",
        name: "Lingvistika (tillar bo‘yicha)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 71,
    },
    {
      id: 59,
      name: "S3-23 PSI",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 8,
        code: "60310900",
        name: "Psixologiya (faoliyat turlari bo‘yicha)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 22,
    },
    {
      id: 58,
      name: "S2-23 MT",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 10,
        code: "60110200",
        name: "Maktabgacha ta’lim",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 30,
    },
    {
      id: 57,
      name: "S2-23 PSI",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 8,
        code: "60310900",
        name: "Psixologiya (faoliyat turlari bo‘yicha)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 22,
    },
    {
      id: 56,
      name: "S2-23 IQT",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 13,
        code: "60310100",
        name: "Iqtisodiyot (tarmoqlar va sohalar bo‘yicha)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 31,
    },
    {
      id: 55,
      name: "S2-22 PSI",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 8,
        code: "60310900",
        name: "Psixologiya (faoliyat turlari bo‘yicha)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 15,
    },
    {
      id: 54,
      name: "M1-23 P",
      department: {
        id: 13,
        name: "Magistratura bo'limi",
        code: "438-103",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 5,
        code: "70310901",
        name: "Psixologiya (faoliyat turlari bo‘yicha)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 23,
    },
    {
      id: 52,
      name: "2-23 XTA",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 4,
        code: "60111800",
        name: "Xorijiy til va adabiyoti (ingliz tili)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 29,
    },
    {
      id: 49,
      name: "S1-23 MT",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 10,
        code: "60110200",
        name: "Maktabgacha ta’lim",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 30,
    },
    {
      id: 47,
      name: "S1-23 Tarix",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 14,
        code: "60220300",
        name: "Tarix (mamlakatlar va yo‘nalishlar bo‘yicha)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 32,
    },
    {
      id: 46,
      name: "S1-23 IQT",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 13,
        code: "60310100",
        name: "Iqtisodiyot (tarmoqlar va sohalar bo‘yicha)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 31,
    },
    {
      id: 45,
      name: "S1-23 PSI",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 8,
        code: "60310900",
        name: "Psixologiya (faoliyat turlari bo‘yicha)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 22,
    },
    {
      id: 44,
      name: "1-23 O`TA",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 18,
        code: "60111400",
        name: "O‘zbek tili va adabiyoti",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 28,
    },
    {
      id: 43,
      name: "1-23 Muz",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 17,
        code: "60111300",
        name: "Musiqa ta’limi",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 27,
    },
    {
      id: 42,
      name: "1-23 BT",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 16,
        code: "60110500",
        name: "Boshlang‘ich ta’lim",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 25,
    },
    {
      id: 41,
      name: "1-23 PSI",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 21,
        code: "60310900",
        name: "Psixologiya (faoliyat turlari bo‘yicha)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 24,
    },
    {
      id: 40,
      name: "1-23 MT",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 15,
        code: "60110200",
        name: "Maktabgacha ta’lim",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 26,
    },
    {
      id: 39,
      name: "1-23 XTA",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 4,
        code: "60111800",
        name: "Xorijiy til va adabiyoti (ingliz tili)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 29,
    },
    {
      id: 38,
      name: "S2-22 MT",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 10,
        code: "60110200",
        name: "Maktabgacha ta’lim",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 17,
    },
    {
      id: 37,
      name: "S2-22 IQT",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 13,
        code: "60310100",
        name: "Iqtisodiyot (tarmoqlar va sohalar bo‘yicha)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 20,
    },
    {
      id: 36,
      name: "S2-22 BT",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 9,
        code: "60110500",
        name: "Boshlang‘ich ta’lim",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 16,
    },
    {
      id: 35,
      name: "S1-22 Tarix",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 14,
        code: "60220300",
        name: "Tarix (mamlakatlar va yo‘nalishlar bo‘yicha)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 21,
    },
    {
      id: 34,
      name: "S1-22 IQT",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 13,
        code: "60310100",
        name: "Iqtisodiyot (tarmoqlar va sohalar bo‘yicha)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 20,
    },
    {
      id: 33,
      name: "S1-22 PSI",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 8,
        code: "60310900",
        name: "Psixologiya (faoliyat turlari bo‘yicha)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 15,
    },
    {
      id: 32,
      name: "S1-22 O`TA",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 12,
        code: "60111400",
        name: "O‘zbek tili va adabiyoti",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 19,
    },
    {
      id: 31,
      name: "S1-22 MuzT",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 11,
        code: "60111300",
        name: "Musiqa ta’limi",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 18,
    },
    {
      id: 30,
      name: "S1-22 MT",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 10,
        code: "60110200",
        name: "Maktabgacha ta’lim",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 17,
    },
    {
      id: 29,
      name: "S1-22 BT",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 9,
        code: "60110500",
        name: "Boshlang‘ich ta’lim",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 16,
    },
    {
      id: 26,
      name: "S3-22 AP",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 6,
        code: "60310900",
        name: "Psixologiya (amaliy psixologiya)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 8,
    },
    {
      id: 25,
      name: "S2-22 AP",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 6,
        code: "60310900",
        name: "Psixologiya (amaliy psixologiya)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 8,
    },
    {
      id: 23,
      name: "M1-22 P",
      department: {
        id: 13,
        name: "Magistratura bo'limi",
        code: "438-103",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 5,
        code: "70310901",
        name: "Psixologiya (faoliyat turlari bo‘yicha)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 12,
    },
    {
      id: 22,
      name: "S1-22 AP",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 6,
        code: "60310900",
        name: "Psixologiya (amaliy psixologiya)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 8,
    },
    {
      id: 20,
      name: "S3-21 AP",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 6,
        code: "60310900",
        name: "Psixologiya (amaliy psixologiya)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 6,
    },
    {
      id: 19,
      name: "1-22 OP",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 2,
        code: "60310900",
        name: "Psixologiya (oila psixologiyasi)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 11,
    },
    {
      id: 18,
      name: "2-22 AP",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 1,
        code: "60310900",
        name: "Psixologiya (amaliy psixologiya)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 10,
    },
    {
      id: 17,
      name: "1-22 AP",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 1,
        code: "60310900",
        name: "Psixologiya (amaliy psixologiya)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 10,
    },
    {
      id: 15,
      name: "1-22 MBTXT",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 3,
        code: "60112600",
        name: "Maktabgacha va boshlang`ich ta`limda xorijiy til (ingliz tili)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 14,
    },
    {
      id: 13,
      name: "2-22 XTA",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 4,
        code: "60111800",
        name: "Xorijiy til va adabiyoti (ingliz tili)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 13,
    },
    {
      id: 12,
      name: "1-22 XTA",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 4,
        code: "60111800",
        name: "Xorijiy til va adabiyoti (ingliz tili)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 13,
    },
    {
      id: 11,
      name: "S1-21 OP",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 7,
        code: "60310900",
        name: "Psixologiya (oila psixologiyasi)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 7,
    },
    {
      id: 10,
      name: "S2-21 AP",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 6,
        code: "60310900",
        name: "Psixologiya (amaliy psixologiya)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 6,
    },
    {
      id: 9,
      name: "S1-21 AP",
      department: {
        id: 14,
        name: "Sirtqi bo'lim",
        code: "438-102",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 6,
        code: "60310900",
        name: "Psixologiya (amaliy psixologiya)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 6,
    },
    {
      id: 8,
      name: "M1-21 P",
      department: {
        id: 13,
        name: "Magistratura bo'limi",
        code: "438-103",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 5,
        code: "70310901",
        name: "Psixologiya (faoliyat turlari bo‘yicha)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 5,
    },
    {
      id: 7,
      name: "1-21 OP",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 2,
        code: "60310900",
        name: "Psixologiya (oila psixologiyasi)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 4,
    },
    {
      id: 6,
      name: "2-21 AP",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 1,
        code: "60310900",
        name: "Psixologiya (amaliy psixologiya)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 3,
    },
    {
      id: 5,
      name: "1-21 AP",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 1,
        code: "60310900",
        name: "Psixologiya (amaliy psixologiya)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 3,
    },
    {
      id: 3,
      name: "1-21 MBTXT",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 3,
        code: "60112600",
        name: "Maktabgacha va boshlang`ich ta`limda xorijiy til (ingliz tili)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 1,
    },
    {
      id: 2,
      name: "2-21 XTA",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 4,
        code: "60111800",
        name: "Xorijiy til va adabiyoti (ingliz tili)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 2,
    },
    {
      id: 1,
      name: "1-21 XTA",
      department: {
        id: 1,
        name: "Psixologiya va xorijiy tillar fakulteti",
        code: "438-101",
        structureType: {
          code: "11",
          name: "Fakultet",
        },
        localityType: {
          code: "11",
          name: "Mahalliy",
        },
        parent: null,
        active: true,
      },
      specialty: {
        id: 4,
        code: "60111800",
        name: "Xorijiy til va adabiyoti (ingliz tili)",
      },
      educationLang: {
        code: "11",
        name: "O‘zbek",
      },
      _curriculum: 2,
    },
  ];
  const fetchGroups = async () => {
    let AllGroups = [];
    let page = 1;
    let hasNextPage = true;

      let obj={
        endpoint:"/v1/data/group-list?page=1",
        method:"GET",
        data:null
      }
        const response = await ApiCall(`/api/v1/hemis`, "POST", obj);

      if (response.status === 200 && response.data) {
        const { items } = response.data.data;
        AllGroups = [...AllGroups, ...items];

        hasNextPage = response.data.data.pagination?.hasNextPage || false;
        page++;
      } else {
        console.error("Failed to fetch groups:", response.message);
        hasNextPage = false;
      }
    

    setGroups(AllGroups);
    setLoading(false);

    const uniqueDepartments = [
      ...new Set(items.map((group) => group.department.name)),
    ];
    setDepartments(uniqueDepartments);

    const storedDepartment = localStorage.getItem("selectedDepartment");
    if (storedDepartment) {
      setSelectedDepartment(storedDepartment);
    } else {
      setSelectedDepartment(uniqueDepartments[0]);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const filteredGroups = items.filter((group) => {
    const matchesDepartment = selectedDepartment
      ? group.department.name === selectedDepartment
      : true;
    return matchesDepartment;
  });

  return (
    <div className="flex">
      <Sidebar />
      <div
        className="p-4 sm:ml-64 w-full min-h-screen"
        style={{
          backgroundImage: `url(${newbg})`,
          backgroundRepeat: "repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-7xl mx-auto mt-10">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <h1 className="text-2xl font-bold text-center">Guruhlar</h1>
            </div>

            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div className="w-full md:w-2/3 mx-auto">
                  <div className="w-full flex items-center justify-between gap-2">
                    {departments.map((dept, index) => (
                      <button
                        key={index}
                        className={`rounded-lg px-6 py-2 ${
                          selectedDepartment === dept
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-black"
                        }`}
                        onClick={() => {
                          setSelectedDepartment(dept);
                          localStorage.setItem("selectedDepartment", dept);
                        }}
                      >
                        {dept}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Guruh Nomi
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Bo'lim Nomi
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Holati
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {items.length > 0 ? (
                        items.map((group) => (
                          <tr key={group.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {group.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {group.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                {group.department.name}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Faol
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan="4"
                            className="px-6 py-4 text-center text-sm text-gray-500"
                          >
                            Guruhlar topilmadi!
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="px-6 py-4 bg-gray-100 border-t border-gray-300 flex items-center justify-between rounded-b-lg shadow-sm">
              <div className="text-sm text-gray-600">
                <span className="font-semibold">1</span>-dan{" "}
                <span className="font-semibold">{filteredGroups.length}</span>
                -gacha (Jami:{" "}
                <span className="font-semibold">{groups.length}</span> guruh)
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors duration-200 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Oldingi
                </button>
                <button className="px-4 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors duration-200 flex items-center">
                  Keyingi
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;
