<template>
        <b-container class="container-fluid">
                <!-- User Interface controls -->
                <b-row>
                        <b-col lg="6" class="my-1">
                                <b-form-group
                                        label="Sort"
                                        label-for="sort-by-select"
                                        label-cols-sm="3"
                                        label-align-sm="right"
                                        label-size="sm"
                                        class="mb-0">
                                        <b-input-group size="sm">
                                                <b-form-select
                                                        id="sort-by-select"
                                                        v-model="sortBy"
                                                        :options="sortOptions"
                                                        class="w-75">
                                                        <template #first>
                                                                <option value="">-- none --</option>
                                                        </template>
                                                </b-form-select>
                                        </b-input-group>
                                </b-form-group>
                        </b-col>

                        <b-col sm="5" md="6" class="my-1">
                                <b-form-group
                                        label="Per page"
                                        label-for="per-page-select"
                                        label-cols-sm="6"
                                        label-cols-md="4"
                                        label-cols-lg="3"
                                        label-align-sm="right"
                                        label-size="sm"
                                        class="mb-0">
                                        <b-form-select
                                                id="per-page-select"
                                                v-model="perPage"
                                                :options="pageOptions"
                                                size="sm"
                                        ></b-form-select>
                                </b-form-group>
                        </b-col>

                        <b-col lg="6" class="my-1">
                                <b-form-group
                                        label="Filter"
                                        label-for="filter-input"
                                        label-cols-sm="3"
                                        label-align-sm="right"
                                        label-size="sm"
                                        class="mb-0"
                                >
                                        <b-input-group size="sm">
                                                <b-form-input
                                                        id="filter-input"
                                                        v-model="filter"
                                                        type="search"
                                                        placeholder="Type to Search"
                                                ></b-form-input>

                                                <b-input-group-append>
                                                        <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                                                </b-input-group-append>
                                        </b-input-group>
                                </b-form-group>
                        </b-col>

<!--                        <b-col sm="5" md="6" class="my-1">
                                <date-range-picker/>
                        </b-col>-->
                </b-row>
                <b-table
                        striped hover
                        :items="users_data"
                        :fields="fields"
                        :filter="filter"
                        :current-page="currentPage"
                        :per-page="perPage"
                        :sort-by.sync="sortBy"
                        stacked="md"
                        show-empty
                        small
                        @filtered="onFiltered">
                </b-table>

                <b-col sm="7" md="6" class="my-1">
                        <b-pagination
                                v-model="currentPage"
                                :total-rows="totalRows"
                                v-if="onFiltered"
                                :per-page="perPage"
                                align="fill"
                                size="sm"
                                class="my-0"
                        ></b-pagination>
                </b-col>
        </b-container>
</template>

<script>
        import Vue from 'vue'
        import DateRangePicker from 'vue-mj-daterangepicker'
        import 'vue-mj-daterangepicker/dist/vue-mj-daterangepicker.css'
        Vue.use(DateRangePicker)

    export default {
            name: "vTabel",
            components: {},
            data() {
                    return {
                            fields: [
                                    {key: 'id', label: 'id', sortable: true},
                                    {key: 'name', label: 'name', sortable: true},
                                    {key: 'points_earned', label: 'points_earned', sortable: true},
                                    {key: 'points_spend', label: 'points_spend', sortable: true},
                                    {key: 'registration_date', label: 'registration_date', sortable: true}
                            ],
                            currentPage: 1,
                            perPage: 5,
                            pageOptions: [5, 10, 15, {value: 100, text: "Show a lot"}],
                            sortBy: '',
                            filter: null,
                            filterOn: [],
                            row: 1

                    }
            },
            props: {
                    users_data: {
                            type: Array
                    },
            },
            computed: {
                    sortOptions() {
                            return this.fields
                                    .filter(f => f.sortable)
                                    .map(f => {
                                            return { text: f.label, value: f.key }
                                    })
                    },
                    totalRows: {
                            get: function () {
                                    if(this.row === 1){
                                            return this.users_data.length
                                    } else {
                                            return this.row
                                    }
                            },
                            set: function (newRow) {
                                    this.row = newRow
                            }
                    },
            },
            methods: {
                    onFiltered(filteredItems) {
                            this.totalRows = filteredItems.length
                    },
            }
    }
</script>
