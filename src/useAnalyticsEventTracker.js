import ReactGA from "react-ga4";

const useAnalyticsEventTracker = (category = "Interview category") => {
  const eventTracker = (action = "page action", label = "page action label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}

export default useAnalyticsEventTracker;