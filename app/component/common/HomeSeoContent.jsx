import { FAQ } from './faq';
import { mp4FAQs } from '../constant/faqJson';

export default function HomeSeoContent() {
  return (
    <div className="mt-10 text-md leading-[1.75] text-slate-700">
      <p className="mb-4">
        SSInstagram is an Instagram Reels downloader that lets you save
        supported Reels as MP4 videos. Copy the link to the Reel you want
        to download, paste it into the tool above, and download the
        available video.
      </p>

      <p className="mb-4">
        The downloader works in your web browser, so you don't need to
        install a separate app. SSInstagram also supports eligible
        Instagram video links, with availability depending on whether
        the content can be accessed by the tool.
      </p>

      {/* Steps */}
      <h2 className="mt-4 mb-4 text-[1.35rem] font-extrabold tracking-[-0.02em] text-slate-900" id="how-to">How to Download Instagram Videos</h2>

      <div className="mb-4 flex flex-col gap-3">
        <div className="flex items-baseline gap-2 leading-[1.6]">
          <span className="font-bold text-slate-900">1:</span>
          <span>
            Open Instagram, find the Reel you want to save, and copy its link
            using Instagram's sharing options.
          </span>
        </div>

        <div className="flex items-baseline gap-2 leading-[1.6]">
          <span className="font-bold text-slate-900">2:</span>
          <span>
            Return to{" "}
            <a
              href="/"
              className="text-blue-600 underline underline-offset-[3px]"
            >
              SSInstagram
            </a>{" "}
            and paste the Reel URL into the input box above.
          </span>
        </div>

        <div className="flex items-baseline gap-2 leading-[1.6]">
          <span className="font-bold text-slate-900">3:</span>
          <span>
            Click the <strong>Download</strong> button and wait for the Reel
            to finish processing.
          </span>
        </div>

        <div className="flex items-baseline gap-2 leading-[1.6]">
          <span className="font-bold text-slate-900">4:</span>
          <span>
            When the result is ready, click <strong>Download Video (MP4) </strong>
            to save the available video to your device.
          </span>
        </div>
      </div>

      <section className="mb-4">
        <h2 className="mb-4 text-[1.35rem] font-extrabold text-slate-900">
          Instagram Reels Downloader
        </h2>

        <p className="mb-4 leading-[1.7] text-slate-700">
          Looking for a way to save an Instagram Reel to your device?
          SSInstagram lets you download supported Reels as MP4 videos
          through your browser. You can use the downloaded file for
          personal offline viewing.
        </p>

        <p className="leading-[1.7] text-slate-700">
          To get started, use the link to the Reel you want to save.
          The downloader will attempt to process the link and provide
          a video file when the content is accessible. Some Reels may
          not be available to download because of access restrictions
          or processing issues.
        </p>
      </section>

      {/* Overview */}
      <h2 className="mt-4 mb-4 text-[1.35rem] font-extrabold tracking-[-0.02em] text-slate-900" id="overview">Why Use SSInstagram for Instagram Reels?</h2>


      <p className="mb-4 leading-[1.7] text-slate-700">
        SSInstagram provides a browser-based way to download supported
        Instagram Reels. You can use the tool without installing a separate
        application or learning a complicated process.
      </p>

      <section className="mb-4">

        <ul className="mb-5 list-disc space-y-2 pl-5 leading-[1.7] text-slate-700">
          <li>
            <strong>No separate app required:</strong> Open SSInstagram in
            your browser to start a download.
          </li>

          <li>
            <strong>MP4 video files:</strong> Save supported Reels in the
            video format provided by the downloader.
          </li>

          <li>
            <strong>Works across devices:</strong> Access the website from
            a supported mobile, tablet, or desktop browser.
          </li>

          <li>
            <strong>Simple link-based process:</strong> Submit the Reel URL
            and download the video when processing is complete.
          </li>
        </ul>
      </section>

      {/* Devices or System Supported */}
      <section className="mb-4" id="devices">
        <h2 className="mb-4 text-[1.35rem] font-extrabold tracking-[-0.02em] text-slate-900">
          Download Instagram Reels on Any Device
        </h2>

        <p className="mb-5 leading-[1.7] text-slate-700">
          You can use SSInstagram in a supported web browser on your phone,
          tablet, or computer. Once a Reel has been processed, the steps for
          saving the MP4 file depend on your device and browser.
        </p>

        <ul className="list-disc space-y-2 pl-5 leading-[1.7] text-slate-700">
          <li>
            <strong>Android:</strong> Open SSInstagram in your mobile browser
            and follow the download prompt to save the video.
          </li>

          <li>
            <strong>iPhone and iPad:</strong> Use a supported browser and follow
            its download instructions. The file may be available through the
            browser's downloads or the Files app.
          </li>

          <li>
            <strong>Windows and Mac:</strong> Open the website in your desktop
            browser and save the processed video using the download option.
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="mb-4 text-[1.35rem] font-extrabold tracking-[-0.02em] text-slate-900">
          Download Instagram Reels in MP4 Format
        </h2>

        <p className="leading-[1.7] text-slate-700">
          SSInstagram provides supported Instagram Reels as MP4 video files.
          After the Reel has been processed, click the download button to save
          the available video to your device.
        </p>

        <p className="mt-4 leading-[1.7] text-slate-700">
          MP4 is a widely supported video format that can be played on many
          phones, tablets, and computers. The file you receive depends on the
          video that the downloader can access and process.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="mb-4 text-[1.35rem] font-extrabold tracking-[-0.02em] text-slate-900">
          Which Instagram Reels Can You Download?
        </h2>

        <p className="mb-4 leading-[1.7] text-slate-700">
          SSInstagram can process Instagram Reels and videos when their
          links are accessible to the downloader. Whether a download works
          depends on the content and its availability.
        </p>

        <p className="leading-[1.7] text-slate-700">
          Private content and links that cannot be accessed may not work.
          If a Reel fails to download, check that you copied the correct
          Instagram link and that the content is still available.
        </p>
      </section>

      {/* FAQ */}
      <FAQ items={mp4FAQs} />
    </div>
  );
}
