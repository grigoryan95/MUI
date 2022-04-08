import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";


export const IconSearch = styled(SearchIcon)(
  ({ theme,test }) => `
  cursor: pointer;
  background: linear-gradient(91.67deg,#08c9c3,#0494d1);
  color: ${test === 'true' ? 'white' : 'black'};
  line-height: 36px;
  border-radius: 32px;
  height: 36px;
  max-width: 65px;
  width: 100%;
  margin: -10px;
  margin-left: 10px;
`,
);