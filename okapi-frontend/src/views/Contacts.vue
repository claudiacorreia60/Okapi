<template>
  <b-container>
    <b-row class="centered-height" align-v="center" align-h="center">
    <div class="lang">
        <!-- Title -->
        <div class="mb-5">
          <h4>Contacts</h4>
        </div>
    <div class="align-center">
      <b-row align-v="center" id="actions" class="text-center">
        <b-col sm="12" md="4" id="phone" align-self="center">
          <img src="../assets/phone.png" class="phoneimage">
          <div class="phoneoverlay">
          <h3 class="phonenumber">+351 253 xxx xxx</h3>
          </div>
        </b-col>
        <b-col sm="12" md="4" id="email" align-self="center">
          <img src="../assets/email.png" class="emailimage">
          <div class="emailoverlay">
          <h2 class="emailaddress">okapi@gmail.com</h2>
          </div>
        </b-col>
        <b-col sm="12" md="4" id="address" align-self="center">
          <img src="../assets/home-address.svg" class="addressimage">
          <div class="addressoverlay">
          <h4 class="textaddress">Minho University</h4>
          </div>
        </b-col>
      </b-row>
      </div>
      </div>
    </b-row>
  </b-container>
</template>
3
<script>
</script>

<style lang="scss">
h4 {
  text-align: center;
  font-size: 30px;
  color: #2B1E02;
}

.centered-height {
  height: calc(100vh - 110px);
}

.lang {
  width: 70%;
  display: inline-block;
}


#actions{
    background-color: white;
}


#phone:hover .phoneoverlay {
  bottom: 0;
  height: 100%;
}


.phoneimage{
  display: block;
  width: 100%;
  height: auto;
}

.phoneoverlay {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: #6D3C1D;
  overflow: hidden;
  width: 100%;
  height:0;
  transition: .5s ease;
}

.phonenumber {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

#email:hover .emailoverlay {
  bottom: 0;
  height: 100%;
}


.emailimage{
  display: block;
  width: 100%;
  height: auto;
}

.emailoverlay {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: #6D3C1D;
  overflow: hidden;
  width: 100%;
  height:0;
  transition: .5s ease;
}

.emailaddress {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

#address:hover .addressoverlay {
  bottom: 0;
  height: 100%;
}


.addressimage{
  display: block;
  width: 100%;
  height: auto;
}

.addressoverlay {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: #6D3C1D;
  overflow: hidden;
  width: 100%;
  height:0;
  transition: .5s ease;
}

.textaddress {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

</style>
