import { ReactComponent as home } from "../assets/icons/home.svg";
import { ReactComponent as trends } from "../assets/icons/trends.svg";
import { ReactComponent as subscriptions } from "../assets/icons/subcriptions.svg";
import { ReactComponent as library } from "../assets/icons/library.svg";
import { ReactComponent as history } from "../assets/icons/history.svg";
import { ReactComponent as yourVideos } from "../assets/icons/your-videos.svg";
import { ReactComponent as watchLater } from "../assets/icons/watch-later.svg";
import { ReactComponent as likedVideos } from "../assets/icons/liked-videos.svg";
import { ReactComponent as browseChannels } from "../assets/icons/browse-channels.svg";
import { ReactComponent as youtubePremium } from "../assets/icons/youtube-premium.svg";
import { ReactComponent as gaming } from "../assets/icons/gaming.svg";
import { ReactComponent as live } from "../assets/icons/live.svg";
import { ReactComponent as settings } from "../assets/icons/settings.svg";
import { ReactComponent as reportHistory } from "../assets/icons/report-history.svg";
import { ReactComponent as help } from "../assets/icons/help.svg";
import { ReactComponent as sendFeedback } from "../assets/icons/send-feedback.svg";

import user1 from "../assets/imgs/user1.png"
import user2 from "../assets/imgs/user2.png"
import user3 from "../assets/imgs/user3.png"
import user4 from "../assets/imgs/user4.png"

import styled, {css} from "styled-components";
const Icons = styled.div``;

const common = css`
  width: 20px;
  height: 20px;
  margin-right: 25px;
`

export const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 25px;
`

// Icons components start ******************************************
Icons.Home = styled(home)`${common}`;
Icons.Trends = styled(trends)`${common}`;
Icons.Subscriptions = styled(subscriptions)`${common}`;
Icons.Library = styled(library)`${common}`;
Icons.History = styled(history)`${common}`;
Icons.YourVideos = styled(yourVideos)`${common}`;
Icons.WatchLater = styled(watchLater)`${common}`;
Icons.LikedVideos = styled(likedVideos)`${common}`;
Icons.BrowseChannels = styled(browseChannels)`${common}`;
Icons.YoutubePremium = styled(youtubePremium)`${common}`;
Icons.Gaming = styled(gaming)`${common}`;
Icons.Live = styled(live)`${common}`;
Icons.Settings = styled(settings)`${common}`;
Icons.ReportHistory = styled(reportHistory)`${common}`;
Icons.Help = styled(help)`${common}`;
Icons.SendFeedback = styled(sendFeedback)`${common}`;
// icons components end *******************************************

export const sidebar = [
  {
    id: 1,
    title: "",
    data: [
      { id: 1, title: "Home", icon: Icons.Home },
      { id: 2, title: "Trending", icon: Icons.Trends },
      { id: 3, title: "Subscriptions", icon: Icons.Subscriptions },
    ],
  },
  {
    id: 2,
    title: "",
    data: [
      { id: 1, title: "Library", icon: Icons.Library },
      { id: 2, title: "History", icon: Icons.History },
      { id: 3, title: "Your videos", icon: Icons.YourVideos },
      { id: 4, title: "Watch later", icon: Icons.WatchLater },
      { id: 5, title: "Liked videos", icon: Icons.LikedVideos },
    ],
  },
  {
    id: 3,
    title: "Subscriptions",
    data: [
      { id: 1, title: "Oktay Candan", src: user1},
      { id: 2, title: "Arnold Morrison", src: user2},
      { id: 3, title: "Hudson Snyder", src: user3},
      { id: 4, title: "Thomas Burns", src: user4},
      { id: 5, title: "Browse channels", icon: Icons.BrowseChannels},
    ],
  },
  {
    id: 4,
    title: "More From Youtube",
    data: [
      { id: 1, title: "Youtube Premium", icon: Icons.YoutubePremium },
      { id: 2, title: "Gaming", icon: Icons.Gaming },
      { id: 3, title: "Live", icon: Icons.Live },
    ],
  },
  {
    id: 5,
    title: "",
    data: [
      { id: 1, title: "Settings", icon: Icons.Settings },
      { id: 2, title: "Report history", icon: Icons.ReportHistory },
      { id: 3, title: "Help", icon: Icons.Help },
      { id: 4, title: "Send feedback", icon: Icons.SendFeedback },
    ],
  },
];
