<template>
  <div>
    <a-modal
      v-model="isVisible"
      title="Cart Details"
      @ok="handleOk"
      @cancel="handleCancel"
      :cancel-button-props="{ props: { disabled: true } }"
    >
      <a-table :columns="columns" :data-source="cartData">
        <span slot="customTitle"> Name</span>
      </a-table>
      <span style="font-weight: bold"> Total</span>
      <span style="font-weight: bold; margin-left: 60%">{{ comp }}/= </span>
    </a-modal>
  </div>
</template>
<script>
const columns = [
  {
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" },
  },
  {
    title: "Qty",
    dataIndex: "count",
    key: "age12",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "address",
  },
  {
    title: "Sub Total",
    key: "tags",
    dataIndex: "sub_total",
  },
];

export default {
  name: "CartItem",
  components: {},
  data() {
    return {
      visible: false,
      columns,
      cartData: [],
    };
  },

  props: {
    isVisible: Boolean,
    showModal: Function,
    handleOk: Function,
    handleCancel: Function,
  },
  created() {
    this.cartData = this.$store.state.cart;
  },

  computed: {
    console: () => console,
    window: () => window,
    comp: function () {
      console.log("cartData 123", this.cartData);
      let temp = 0;
      this.cartData.forEach((element) => {
        console.log("element", element);
        if (element.sub_total) {
          temp += element.sub_total;
        }
      });
      return temp;
    },
  },
};
</script>
