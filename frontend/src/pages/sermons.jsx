import React from "react";
import {
  Footers,
  LatestBlog,
  NavBar,
  NewsLetter,
  Navbar2,
  PageHead,
  BlogContainer,
  BlogContainerSmall,
  SearchDiv,
  BfaDiv,
  NewsLetterContainer,
  AuthorsDiv,
  CategoriesDiv,
  TagsDiv,
  SocialIconsDiv,
  RecentPostDiv,
  MorePostsDiv,
} from "../sections";
import BackToTopButton from "../constants/back-to-top-btn";


const Sermons = () => {
  return (
    <>
      <Navbar2 />
      <PageHead name="Sermons" />
      <section className="p-7">
      <div id="cmpt-sidebar"
        class="height-100 bg-white xlarge-up-border-right border-gray-light border-box p-4">
        <div class="toggle-switch padding-horz-small large-down-padding-horz-medium padding-vert-xsmall classroom-playlist-toggle">
            <input type="hidden" name="play_all" value="on" />

            <label class="toggle-switch__label" for="playAllToggle">
                Play All
            </label>

            <p class="toggle-switch__description" id="playAllToggle-description">
                Automatically move to the next video in the Classroom when playback concludes
            </p>

            <button id="playAllToggle" class="toggle-switch__switch" type="button" role="switch"
                aria-checked="true" aria-describedby="playAllToggle-description">
                <span class="toggle-switch__indicator"></span>
            </button>
        </div>

        <div>
            <ol class="text-2 list-none margin-bottom-medium">
                <li class="classroom-item" data-item-id="6171915ddb9ba">
                    <a href="/classroom/youtube-tremolo-harmonica-tutorials-57942/6171915ddb9ba"
                        class="border-collapse hover:no-underline hover:bg-gray-xlight row nowrap vert-align-top p-2 large-down-padding-horz-medium text-charcoal">
                        <span class="item-count rounded-small font-semibold h-7 w-7 flex items-center justify-center">64</span>
                        <span class="text-3 self-center">
                            How to Play Turkey in the Straw on a Tremolo Harmonica with 24 Holes
                        </span>
                        <button aria-label="Mark as complete" aria-pressed="false"
                            class="item-checkbox ml-2 rounded-full border-box">
                            <i class="icon-checkmark-white icon-small icon-center"></i>
                        </button>
                    </a>
                </li>

                {/* <!-- Add more list items as needed --> */}

            </ol>
        </div>
    </div>
      </section>
      <BackToTopButton />
      <Footers />
    </>
  );
};

export default Sermons;
