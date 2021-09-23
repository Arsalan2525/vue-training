<template>
  <div class="for-product">
    <div
      v-for="n in result"
      v-bind:key="n.id"
      :style="{
        marginRight: '20px',
        marginLeft: '22px',
        marginBottom: '25px',
        display: 'inline-flex',
      }"
    >
      <div>
        <div @click="showModal(n)">
          <CardView
            :title="n.name"
            :source="n.src"
            description="***** Available In all Size *****"
            price="Rs 1500/="
            style="border-color: #5f9ea0"
          />
        </div>
        <a-input-number
          id="inputNumber"
          :default-value="0"
          :min="1"
          :max="10"
          @change="onChange"
        />
        <span style="font-weight: bold"> Click To Add Item</span>

        <font-awesome-icon
          icon="cart-plus"
          v-bind:class="[isActive ? activeClass : notActive]"
          @click="handleCartClick(n, count)"
        />
      </div>
    </div>
    <a-modal
      title="Product Detail"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
      class="custom"
    >
      {{ this.ModalText }}
    </a-modal>
  </div>
</template>
<script>
import CardView from "./CardView.vue";

export default {
  name: "ShowProducts",
  components: {
    CardView,
  },
  data() {
    return {
      id: this.$route.params.cat_id,
      result: [],
      isActive: false,
      ModalText: "Content of the modal",
      visible: false,
      confirmLoading: false,
      count: 1,
    };
  },
  created() {
    this.result = this.$store.getters.getProducts(this.id);
  },
  methods: {
    showModal(n) {
      this.visible = true;
      this.ModalText = n.name;
    },
    handleOk() {
      this.ModalText = "The modal will be closed after two seconds";
      this.visible = false;
    },
    handleCancel() {
      this.visible = false;
    },
    handleCartClick(n) {
      let obj = {
        id: n.id,
        name: n.name,
        price: 1000,
        count: 1,
        sub_total: 1000,
      };
      this.$store.commit("addtoCart", obj);
    },
  },
};
</script>
<style scoped>
.for-product {
  background: white;
}

.fa-cart-plus {
  color: red;
  height: 40px;
  width: 30px;
  position: absolute;
}
.ant-modal-content {
  height: 100vh !important;
  width: 100vh !important;
}
</style>