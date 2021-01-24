import axios from "axios";

const BASEURL = "https://randomuser.me/api/?nat=us&results=";

const employeeSearch = {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
}
// Export an object with a "search" method that searches the Giphy API for the passed query
export default employeeSearch;
