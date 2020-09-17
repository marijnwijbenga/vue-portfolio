<template>
  <div>
    <Card>
      <div class="d-flex flex-row  py-5 px-4">
        <div class="d-flex flex-column w-50 ">
          <div class="d-flex flex-row h5 mb-4">
            <div class="pr-4">
              <img src="../assets/img/me.png" alt="" class="img-fluid rounded-circle">
            </div>
            <div class="d-flex flex-column">
              <div><h3>Marijn Wijbenga</h3></div>
              <div class="font-weight-bolder my-4"><span class="text-info">Junior</span> Front-end developer</div>
              <div class="font-weight-light text-info">Schagen, The Netherlands</div>
            </div>
          </div>
          <div class="pt-4">social links</div>
        </div>
        <div class="w-50 d-flex flex-column justify-content-between">
          <div>
            skills here
          </div>
          <div class="">
            <button class="btn btn-info text-white px-5 font-weight-bold w-75">Recruit Me</button>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "PersonnelCard",
  components: {
    Card
  }
}
</script>