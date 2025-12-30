
import { Navbar } from "./components/Navbar"
import { LandingPage } from "./components/landingPage"
import { TrustPiller } from "./components/trustPiller"
import { AboutUs } from "./components/aboutUs"
import { AddsPage } from "./components/addsPage"
import { CraftedVision } from "./components/craftedVision"
import { Curated } from "./components/curated"
import { ReviewsFromCustomer } from "./components/reviewsFromCustomer"
import { PerfectedFocus } from "./components/perfectedFocus"
import { ContactUS } from "./components/contacts"
import { Footer } from "./components/footer"
export const Home = () => {
    return (<>
        <div className="w-full">
            <Navbar />
        </div>
        <div className="w-full">
            <LandingPage />
        </div>
        <div className="w-full">
            <TrustPiller />
        </div>
        <div className="w-full">
            <AboutUs />
        </div>
        <div className="w-full">
            <AddsPage />
        </div>
        <div className="w-full">
            <CraftedVision />
        </div>
        <div className="w-full">
            <Curated />
        </div>

        <div className="w-full">
            <ReviewsFromCustomer />
        </div>
        <div className="w-full">
            <PerfectedFocus />
        </div>
        <div className="w-full">
            <ContactUS />
        </div>
        <div className="w-full">
            <Footer />
        </div>
    </>)
}