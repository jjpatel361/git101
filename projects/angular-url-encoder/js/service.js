app.service('URLService',function () {

    // URL to encode
    this.getEncodedURL=function (url) {
      try {
          return encodeURIComponent(url);
      } catch (e) {
          console.log('Oops something went wrong');
          console.log(e);
          return url;
      }
    }


    this.getDecodedURL=function (url) {
      try {
        return decodeURIComponent(url);
      } catch (e) {
        console.log('Oops something went wrong ');
        console.log(e);
      }
      return url;
    }

})
