import axios from "axios";



// Export an object with a "search" method that searches the Giphy API for the passed query

$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });