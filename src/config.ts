export const config = {
  graph: {
    primaryUrl: String(process.env.REACT_APP_PRIMARY_GRAPH_URL),
  },
  magicApiKey: String(process.env.REACT_APP_MAGIC_API_KEY),
  near: {
    contract: String(process.env.REACT_APP_NEAR_CONTRACT_NAME),
  },
};
