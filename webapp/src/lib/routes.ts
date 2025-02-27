const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
  return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>;
};

// Route for the home page
export const getAllIdeasRoute = () => '/';

export const viewIdeaRouteParams = getRouteParams({ ideaNick: true });
export type ViewIdeaRouteParams = typeof viewIdeaRouteParams;

// Itinerary for individual idea pages
export const getViewIdeaRoute = ({ ideaNick }: ViewIdeaRouteParams) => `/ideas/${ideaNick}`;

// A route to create a new idea
export const getNewIdeaRoute = () => `/ideas/new`;
