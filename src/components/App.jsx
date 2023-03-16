import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// import CoursesPage from "pages/CoursesPage/CoursesPage";

const CoursesPage = lazy(() => import("../pages/CoursesPage/CoursesPage"));
const OneCoursePage = lazy(() => import("../pages/OneCoursePage/OneCoursePage"))


export const App = () => {  
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<CoursesPage />} />
        <Route path="/:id" element={<OneCoursePage />} />
        <Route path="*" element={<div>Page not found - 404</div>} />
      </Routes>
    </Suspense>
  );
};
