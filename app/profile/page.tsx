import Header from '@/components/Header';
import Experience from '@/components/Experience';
import Boards from '@/components/Boards';
import Education from '@/components/Education';
import Articles from '@/components/Articles';
import Blogs from '@/components/Blogs';
import SelfAuthoredBlogs from '@/components/SelfAuthoredBlogs';
import Videos from '@/components/Videos';
import Voyages from '@/components/Voyages';
import XTimeline from '@/components/XTimeline';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import Chat from '@/components/Chat';

export default function ProfilePage() {
  return (
    <div className="overflow-hidden supports-[overflow:clip]:overflow-clip">
      <div className="max-w-[728px] mx-auto">
        <div className="w-full bg-white dark:bg-gray-900 border-x border-gray-100 dark:border-gray-800 box-content">
          <div className="px-3 md:px-16">
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="grow py-12 space-y-12">
                <Experience />
                <Boards />
                <Education />
                <Articles />
                <Blogs />
                <SelfAuthoredBlogs />
                <Videos />
                <Voyages />
                <XTimeline />
                <Newsletter />
              </main>
              <Chat />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
