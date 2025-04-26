import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

// my pages
import Home from "./pages/home/Home";
import Welcome from "./pages/welcome/Welcome";
import PurposeMission from "./pages/purpose-mission/PurposeMission";
import Symbols from "./pages/symbols/Symbols";
import Contact from "./pages/contact/Contact";
import Faculty from "./pages/faculty/Faculty";
import Exam from "./pages/exam/Exam";
import AcademicCalendar from "./pages/academic-calendar/AcademicCalendar";
import NewsDetail from "./pages/news/NewsDetail";
import Kampus from "./pages/kampus/Kampus";
import AllNews from "./pages/news/AllNews";
import AllImages from "./pages/news/AllImages";
import PageNotFound from "./pages/404/404";
import MemorandumUser from "./pages/memorandum/Memorandum";
import AdminNews from "./admin/AdminNews";
import Company from "./admin/Company";
import Vacancy from "./admin/Vacancy";
import AdminHome from "./admin/AdminHome";
import LoginAdmin from "./admin/LoginAdmin";
import AllYouTube from "./pages/news/AllYouTube";
import MyCarousel from "./pages/home/MyCorusel";
import ApiCall from "./config/index";
import AdminTeacher from "./admin/AdminTeacher";
import Rektorat from "./pages/tarkibitTuzilma/Rektorat";
import Kafedra from "./pages/tarkibitTuzilma/Kafedra";
import Fakultet from "./pages/Fakultet/index";
import Newspaper from "./pages/newspaper/Newspaper";
import AdminNewspaper from "./admin/AdminNewspaper";
import AdminMessage from "./admin/AdminMessgae";

// app admin
import AppLogin from "./appAdmin/LoginAdmin";
import Nomenklatura from "./appAdmin/Nomenklatura";
import AdminNomenklatura from "./appAdmin/AdminNomenklatura";
import Rank from "./appAdmin/Rank";
import Staff from "./appAdmin/Staff";
import Commander1 from "./appAdmin/Commander";
import Books from "./admin/Books";
import Book from "./pages/book/Book";
import Memorandum from "./admin/Memorandum";
import { useTranslation } from "react-i18next";
import HemisToken from "./appAdmin/HemisToken";
import NewspaperVestnik from "./pages/newspaper/NewspaperVestnik";
import DailyControl from "./appAdmin/DailyControl";

// staff
import LoginStaff from "./staff/LoginStaff";
import StaffHome from "./staff/StaffHome";
import Topshiriq from "./staff/commands/Topshiriq";
import BatafsilBuyruq from "./staff/commands/buyruq/BatafsilBuyruq";
import NewCommand from "./staff/commands/buyruq/NewCommand";
import Group from "./staff/group/Group";
import DarsJadvali from "./staff/dars_jadvali/DarsJadvali";
import NomenklaturaStaff from "./staff/nomenklatura/Nomenklatura";
import MyProfile from "./staff/MyProfile";
import DailyControlStaff from "./staff/daily-control/DailyControl";
import Subfolder from "./staff/daily-control/Subfolder";
import GroupDetails from "./staff/group/DetailGroupe";
import DarsJadvalHafta from "./staff/group/DarsJadvalHafta";

import axios from "axios";

// web site bxu
import UniversityInfo from "./pages/home/university/University";
import AboutUniversity from "./pages/home/university/about/AboutUniversity";
import RectorUniversity from "./pages/home/university/rektor/RectorUniversity";
import StatisticUniversity from "./pages/home/university/statistika/StatisticUniversity";
import ContactUsUniversity from "./pages/home/university/contactUs/ContactUsUnversity";
import ProRectorUniversity from "./pages/home/university/prorectors/ProRectorUniversity";
import HeadUniversity from "./pages/home/university/head-staf/HeadUniversity";
import ProfessorUniversity from "./pages/home/university/professor/ProfessorUniversity";
import KampusUniversity from "./pages/home/university/kampus/Kampus";
import PartnerUniversity from "./pages/home/university/partner/PartnerUniversity";
import Goals from "./pages/home/university/goals/Goals";
import DirectionsUniversity from "./pages/home/university/drections/DirectionsUniversity";
import ResearchCenters from "./pages/home/university/research-centers/ResearchCenters";
import ConferenceHall from "./pages/home/university/conference-hall/ConferenceHall";
import Classrooms from "./pages/home/university/classrooms/Classrooms";
import Dormitory from "./pages/home/university/dormitory/Dormitory";
import AssociationStudent from "./pages/home/university/association/AssociationStudent";
import Support from "./pages/home/university/support/Support";
import Distance from "./pages/home/university/distance/Distance";
import EcoZone from "./pages/home/university/ecozone/EcoZone";
import ScientificActivity from "./pages/home/university/scientificactivity/ScientificActivity";
import UniversityAbout from "./pages/home/university/unversityAbout/UniversityAbout";
import Buyruqlar from "./staff/commands/buyruq/Buyruqlar";
import InProgress from "./staff/commands/buyruq/InProgress";
import Pending from "./staff/commands/buyruq/Pending";
import Completed from "./staff/commands/buyruq/Completed";
import NomenklaturaFolder from "./staff/nomenklatura/NomenklaturaFolder";


function App() {
  const { t } = useTranslation();
  const blockedPages = ["/dashboard", "/app"];
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    checkSecurity();
  }, [blockedPages, location.pathname, navigate]);
  async function checkSecurity() {
    if (
      blockedPages.some((blockedPage) =>
        location.pathname.startsWith(blockedPage)
      )
    ) {
      let accessToken = localStorage.getItem("access_token");
      const res = await ApiCall("/api/v1/security", "GET");
      if (res?.data == 401) {
        navigate("/admin/login");
      }
      if (accessToken !== null) {
        if (res?.data !== 401 && res?.error) {
          console.log("Hello");
          if (res?.data[0]?.name !== "ROLE_ADMIN") {
            navigate("/404");
          }
        }
      } else {
        navigate("/admin/login");
      }
    }
  }

  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/corusel"} element={<MyCarousel />} />
        <Route path={"/memorandum"} element={<MemorandumUser />} />
        <Route path={"/university"} element={<UniversityInfo />} />
        <Route path={"/welcome"} element={<Welcome />} />
        <Route path={"/all-books"} element={<Book />} />
        <Route path={"/kafedra"} element={<Kafedra />} />
        <Route path={"/rektorat"} element={<Rektorat />} />
        <Route path={"/fakultet"} element={<Fakultet />} />
        <Route
          path={"/newspaper/ilmiy-axborotnomalar"}
          element={<Newspaper />}
        />
        <Route
          path={"/newspaper/hamkor-jurnallar"}
          element={<NewspaperVestnik />}
        />
        <Route path={"/purpose-mission"} element={<PurposeMission />} />
        <Route path={"/symbols"} element={<Symbols />} />
        <Route path={"/kampusies"} element={<Kampus />} />
        <Route path={"/faculties"} element={<Faculty />} />
        <Route path={"/exam-samples"} element={<Exam />} />
        <Route path={"/all-news"} element={<AllNews />} />
        <Route path={"/all-images"} element={<AllImages />} />
        <Route path={"/all-youtube"} element={<AllYouTube />} />
        <Route path={"/contact-us"} element={<Contact />} />
        <Route path={"/academic-calendar"} element={<AcademicCalendar />} />
        <Route path={"/news-detail/:id"} element={<NewsDetail />} />
        <Route path={"/admin/login"} element={<LoginAdmin />} />
        <Route path={"/dashboard"} element={<AdminHome />} />
        <Route path={"/dashboard/gallery"} element={<Vacancy />} />
        <Route path={"/dashboard/message"} element={<AdminMessage />} />
        <Route path={"/dashboard/news"} element={<AdminNews />} />
        <Route path={"/dashboard/book"} element={<Books />} />
        <Route path={"/dashboard/newspaper"} element={<AdminNewspaper />} />
        <Route path={"/dashboard/teachers"} element={<AdminTeacher />} />
        <Route path={"/dashboard/memorandum"} element={<Memorandum />} />
        <Route path={"/dashboard/youtube"} element={<Company />} />
        <Route path={"/*"} element={<PageNotFound />} />

        {/*  University */}
        <Route path={"/university/about"} element={<AboutUniversity />} />
        <Route path={"/university/rector"} element={<RectorUniversity />} />
        <Route path={"/university/numbers"} element={<StatisticUniversity />} />
        <Route path={"/university/contact"} element={<ContactUsUniversity />} />
        <Route
          path={"/university/association"}
          element={<AssociationStudent />}
        />
        <Route path={"/university/support"} element={<Support />} />
        <Route
          path={"/university/prorector"}
          element={<ProRectorUniversity />}
        />
        <Route path={"/university/head"} element={<HeadUniversity />} />
        <Route
          path={"/university/professors"}
          element={<ProfessorUniversity />}
        />
        <Route path={"/university/campuses"} element={<KampusUniversity />} />
        <Route
          path={"/university/partnership"}
          element={<PartnerUniversity />}
        />
        <Route path={"/university/aim"} element={<Goals />} />
        <Route
          path={"/university/directions"}
          element={<DirectionsUniversity />}
        />
        <Route
          path={"/university/research-centers"}
          element={<ResearchCenters />}
        />
        <Route
          path={"/university/conference-hall"}
          element={<ConferenceHall />}
        />
        <Route path={"/university/classrooms"} element={<Classrooms />} />
        <Route path={"/university/dormitory"} element={<Dormitory />} />
        <Route path={"/university/distance"} element={<Distance />} />
        <Route path={"/university/ecozone"} element={<EcoZone />} />
        <Route
          path={"/university/scientificactivity"}
          element={<ScientificActivity />}
        />
        <Route path={"/university/info"} element={<UniversityAbout />} />

        {/*  app admins */}

        <Route path={"/app/hemis"} element={<HemisToken />} />
        <Route path={"/app/admins"} element={<AdminNomenklatura />} />
        <Route path={"/app/ranks"} element={<Rank />} />
        <Route path={"/app/staff"} element={<Staff />} />
        <Route path={"/app/commander"} element={<Commander1 />} />
        <Route path={"/app/folders"} element={<Nomenklatura />} />
        <Route path={"/app/daily-control"} element={<DailyControl />} />
        <Route path={"/generator/login"} element={<AppLogin />} />

        {/*  mobil */}
        <Route path={"/mobil/login"} element={<LoginStaff />} />
        <Route path={"/mobil/"} element={<StaffHome />} />
        <Route path={"/mobil/commands"} element={<Topshiriq />} />
        <Route path={"/mobil/commands/buyruqlar"} element={<Buyruqlar />} />
        <Route path={"/mobil/commands/buyruqlar/newcommand"} element={<NewCommand />} />
        <Route path={"/mobil/commands/buyruqlar/jarayonda"} element={<InProgress />} />
        <Route path={"/mobil/commands/buyruqlar/kutilmoqda"} element={<Pending />} />
        <Route path={"/mobil/commands/buyruqlar/completed"} element={<Completed />} />
        {/* <Route path={"/mobil/commands/buyruq/ccccc"} element={<BatafsilBuyruq />} /> */}
        <Route path={"/mobil/nomenklatura"} element={<NomenklaturaStaff />} />
        <Route path={"/mobil/nomenklatura-detail"} element={<NomenklaturaFolder />} />
        <Route path={"/mobil/groups"} element={<Group />} />
        <Route path="/mobil/groups/:id" element={<GroupDetails />} />
        <Route path="/mobil/groups/dasr-jadval/:id" element={<DarsJadvalHafta />} />
        <Route path={"/mobil/timetable"} element={<DarsJadvali />} />
        <Route path={"/mobil/profile"} element={<MyProfile />} />
        <Route path={"/mobil/daily-control"} element={<DailyControlStaff />} />
        <Route path={"/mobil/daily-control"} element={<DailyControlStaff />} />
        <Route
          path={"/mobil/daily-control/:subfolderId"}
          element={<Subfolder />}
        />
      </Routes>
    </div>
  );
}

export default App;
