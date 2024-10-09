//Components
import Navbar from "./components/navbar/Navbar";
import Hero, { Article } from "./components/hero/Hero";
import Productivity from "./components/productivity/Productivity";
import Integrations from "./components/integrations/Integrations";
import Pricing from "./components/pricing/Pricing";
import ReadyToBegin from "./components/readytobegin/ReadyToBegin";
import Faqs from "./components/faqs/Faqs";
import Footer from "./components/footer/Footer";
import Example from "./components/examples/Example";
import EffortlessIntegrations from "./components/effortlessintegrations/EffortlessIntegrations";
import PricingPlans from "./components/pricingplans/PricingPlans";
import Contact from "./components/contact/Contact";

//React-Router-Dom
import { Routes, Route } from "react-router-dom";

function App() {

  return (

    <div className="App">

      <Navbar />

      <Routes>

        <Route path="/" exact

          element={

            <>

              <Hero />

              <Productivity />

              <Integrations />

              <Pricing />

              <Faqs />

              <ReadyToBegin />

            </>

          }

        />

        <Route path="/examples" exact

          element={

            <>

              <Example />

              <Integrations />

              <Article />

              <ReadyToBegin />

            </>

          }

        />

        <Route path="/effortlessintegrations" exact

          element={

            <>

              <EffortlessIntegrations />

              <Article />

              <ReadyToBegin />

            </>

          }

        />

        <Route path="/pricingplans" exact

          element={

            <>

              <PricingPlans />

              <Pricing />

              <Faqs />

              <Article />

              <ReadyToBegin />

            </>

          }

        />

        <Route path="/contact" exact

          element={

            <>

              <Contact />

              <Faqs />

            </>

          }

        />

      </Routes>

      <Footer />

    </div>

  );

}

export default App;