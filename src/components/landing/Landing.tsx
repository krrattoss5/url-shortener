import Loading from "../Loading";
import { Suspense, lazy } from "react";
const Hero = lazy(() => import("./hero/Hero"));
const StartedFree = lazy(() => import("./startedFree/StartedFree"));

const Landing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Hero />
      <StartedFree />
    </Suspense>
  );
};

export default Landing;
