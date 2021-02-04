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
                                        class="mb-0">
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
                </b-row>

                <b-col lg="4" class="my-1 ml-5">
                        <date-picker
                                v-model="calendarRange"
                                type="date" range
                                placeholder="Select date range"
                                @close="dateFilter"
                                @clear="clear"
                                @open="open"
                        >
                        </date-picker>
                </b-col>

                <b-table
                        striped hover
                        :items="items()"
                        :fields="fields"
                        :filter="filter"
                        :current-page="currentPage"
                        :per-page="perPage"
                        :sort-by.sync="sortBy"
                        stacked="md"
                        show-empty
                        small
                        @filtered="onFiltered" >
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
        import DatePicker from 'vue2-datepicker';
        import 'vue2-datepicker/index.css';
/*        import {data} from "../../db.js";*/

        import 'vue2-datepicker/locale/ru';
    export default {
            name: "vTabel",
            components: {
                    DatePicker
            },
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
                            rows: -1,
                            allowCompare: false,
                            calendarCount: 1,
                            calendarRange: [],
                            calendarFilteredItems: [],
                            calendarFilterTrue: false,
                            countOfOpens: 0

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
                                    if(this.rows === -1){
                                            return this.users_data.length
                                    } else {
                                            return this.rows
                                    }
                            },
                            set: function (newRows) {
                                    this.rows = newRows
                            }
                    },
                    changecalrenge() {
                            return this.calendarRange
                    }
            },
            methods: {
                    onFiltered(filteredItems) {
                            this.totalRows = filteredItems.length
                    },
                    dateFilter(){
                            for (var i = 0; i < this.users_data.length; ++i) {
                                          var h = new Date(this.users_data[i].registration_date)
                                          if (+h >= +this.changecalrenge[0] && +h <= +this.changecalrenge[1]) {
                                                 this.calendarFilteredItems.push(this.users_data[i])
                                          }
                            }
                            this.calendarFilterTrue = true
                            this.totalRows = this.calendarFilteredItems.length
                },
                    items() {
                            if (this.calendarFilterTrue){
                                    return this.calendarFilteredItems
                            } else {
                                    return this.users_data
                            }

                    },
                    clear() {
                            this.calendarFilteredItems = []
                            this.totalRows = -1
                            this.calendarFilterTrue = false
                    },
                    open() {
                            this.countOfOpens ++
                            if (this.countOfOpens > 1) {
                                    this.calendarFilteredItems = []
                                    this.totalRows = -1
                                    this.calendarFilterTrue = false
                            }
                    }
            }
    }
</script>
