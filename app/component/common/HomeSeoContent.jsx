import { FAQ } from './faq';
import { mp4FAQs } from '../constant/faqJson';

export default function HomeSeoContent() {
  return (
        <div className="mt-10 text-md leading-[1.75] text-slate-700">
          <p className="mb-4">
            SSInstagram is an online Instagram video downloader that lets you save videos and Reels as MP4 files.
            Just copy the URL of a supported Instagram video or Reel and paste it into the downloader above.
          </p>

          <p className="mb-4">
            The downloader works directly in your web browser, so you don't need to install an app or additional software.
            It is designed to keep the download process simple on both mobile and desktop devices.
          </p>

          {/* Steps */}
          <h2 className="mt-4 mb-4 text-[1.35rem] font-extrabold tracking-[-0.02em] text-slate-900" id="how-to">How to Download Instagram Videos</h2>

          <div className="mb-4 flex flex-col gap-3">
            <div className="flex items-baseline gap-2 leading-[1.6]">
              <span className="font-bold text-slate-900">1:</span>
              <span>
                Open Instagram and copy the URL of the video or Reel you want to download.
              </span>
            </div>

            <div className="flex items-baseline gap-2 leading-[1.6]">
              <span className="font-bold text-slate-900">2:</span>
              <span>
                Come to{" "}
                <a
                  href="/"
                  className="text-blue-600 underline underline-offset-[3px]"
                >
                  ssinstagram.online
                </a>{" "}
                and paste the Instagram video or Reel URL into the text box above.
              </span>
            </div>

            <div className="flex items-baseline gap-2 leading-[1.6]">
              <span className="font-bold text-slate-900">3:</span>
              <span>
                Click the <strong>Download</strong> button and wait while the video is
                processed.
              </span>
            </div>

            <div className="flex items-baseline gap-2 leading-[1.6]">
              <span className="font-bold text-slate-900">4:</span>
              <span>
                When the video is ready, click <strong>Download Video (MP4)</strong> to
                save the Instagram video or Reel to your device.
              </span>
            </div>
          </div>

          <section className="mb-4">
            <h2 className="mb-4 text-[1.35rem] font-extrabold text-slate-900">
              Instagram Reels Downloader
            </h2>

            <p className="mb-4 leading-[1.7] text-slate-700">
              SSInstagram also lets you download Instagram Reels as MP4 videos.
              To download a Reel, simply copy its Instagram URL, paste it into the
              downloader above, and click the Download button.
            </p>

            <p className="leading-[1.7] text-slate-700">
              You can use the Instagram Reels downloader directly from your browser
              without installing an additional app or software. The same simple
              process works for supported Instagram videos and Reels on mobile and
              desktop devices.
            </p>
          </section>

          {/* Overview */}
          <h2 className="mt-4 mb-4 text-[1.35rem] font-extrabold tracking-[-0.02em] text-slate-900" id="overview">Why Use SSInstagram?</h2>

          <section className="mb-4">

            <ul className="mb-5 list-disc space-y-2 pl-5 leading-[1.7] text-slate-700">
              <li>
                <strong>Simple URL-based downloads:</strong> Copy an Instagram video or
                Reel link and paste it into the downloader.
              </li>

              <li>
                <strong>No app installation:</strong> Use SSInstagram directly from your
                web browser without installing additional software.
              </li>

              <li>
                <strong>MP4 video downloads:</strong> Download supported Instagram videos
                and Reels as MP4 files.
              </li>

              <li>
                <strong>Works on mobile and desktop:</strong> Access the downloader from
                your phone, tablet, or computer browser.
              </li>

              <li>
                <strong>Quick and straightforward:</strong> The process only requires
                copying the Instagram URL, pasting it, and starting the download.
              </li>
            </ul>

            <p className="leading-[1.7] text-slate-700">
              SSInstagram is designed to make downloading supported Instagram videos and
              Reels straightforward without requiring a separate downloader application.
            </p>
          </section>

          {/* Devices or System Supported */}
          <section className="mb-4" id="devices">
            <h2 className="mb-4 text-[1.35rem] font-extrabold tracking-[-0.02em] text-slate-900">
              Download Instagram Videos on Any Device
            </h2>

            <p className="mb-5 leading-[1.7] text-slate-700">
              SSInstagram works in a web browser, so you can download supported
              Instagram videos and Reels from your phone, tablet, or computer without
              installing a separate application.
            </p>

            <ul className="list-disc space-y-2 pl-5 leading-[1.7] text-slate-700">
              <li>
                <strong>iPhone and iPad:</strong> Open SSInstagram in your browser, paste
                the Instagram video or Reel URL, and start the download.
              </li>

              <li>
                <strong>Android:</strong> Use your mobile browser to paste the Instagram
                URL and download the available MP4 video.
              </li>

              <li>
                <strong>Windows and Mac:</strong> Open SSInstagram in a desktop browser,
                paste the video or Reel link, and download the video to your device.
              </li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="mb-4 text-[1.35rem] font-extrabold tracking-[-0.02em] text-slate-900">
              Instagram Video Download in MP4
            </h2>

            <p className="leading-[1.7] text-slate-700">
              SSInstagram lets you download supported Instagram videos and Reels
              directly as MP4 video files. After you paste the Instagram URL and the
              video is processed, simply click the <strong>Download Video (MP4)</strong>
              button to save it to your device.
            </p>

            <p className="mt-4 leading-[1.7] text-slate-700">
              There is no need to choose a separate file format. The download is
              provided as an MP4 video, making it easy to save and watch on supported
              phones, tablets, and computers.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="mb-4 text-[1.35rem] font-extrabold tracking-[-0.02em] text-slate-900">
              Download Public Instagram Videos and Reels
            </h2>

            <p className="mb-4 leading-[1.7] text-slate-700">
              SSInstagram is designed to download supported videos and Reels that are
              publicly available on Instagram. To start a download, copy the URL of the
              Instagram video or Reel and paste it into the downloader above.
            </p>

            <p className="leading-[1.7] text-slate-700">
              Private Instagram content may not be accessible through the downloader.
              If a video or Reel cannot be processed, make sure the Instagram URL is
              correct and that the content is available to access.
            </p>
          </section>

          {/* FAQ */}
          <FAQ items={mp4FAQs} />
        </div>
  );
}
