import Topbar from './components/home/Topbar'
import Profile from './components/home/Profile'
import Block, { Rich, Frame } from './components/home/Block'
import HomeFooter from './components/home/HomeFooter'
import Highlights from './components/home/Highlights'
import GitHubGraph from './components/home/GitHubGraph'
import Timeline from './components/home/Timeline'
import ProjectList from './components/home/ProjectList'
import { Papers, Stack, Freelance } from './components/home/Extras'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FreelancePage from './components/FreelancePage'
import { INTRO } from './content'
import useReveal from './useReveal'

const isFreelance = () => window.location.pathname.replace(/\/+$/, '') === '/freelance'

export default function App() {
    const page = isFreelance() ? 'freelance' : 'home'
    useReveal([page])

    if (page === 'freelance') {
        document.title = 'Freelance · Aditya Wagh'
        return (
            <>
                <Topbar page="freelance" />
                <main><FreelancePage /></main>
                <Footer page="freelance" />
            </>
        )
    }

    return (
        <>
            <Topbar page="home" />
            <main id="top" className="mx-auto max-w-[46rem] px-4 pt-3 sm:pt-5">
                <Profile />
                <Highlights />
                <GitHubGraph />

                <Block id="about" title="About">
                    <Frame className="reveal p-5 sm:p-7">
                        <div className="space-y-5 text-[15.5px] sm:text-[16.5px] leading-[1.85] tracking-[0.01em] text-fg/75">
                            {INTRO.map((t) => <p key={t}><Rich text={t} /></p>)}
                        </div>
                    </Frame>
                </Block>

                <ProjectList />
                <Timeline />
                <Papers />
                <Freelance />
                <Stack />
                <Contact narrow />
            </main>
            <HomeFooter />
        </>
    )
}
