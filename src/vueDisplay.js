window.onload = function () {
    /* Create first Vue Component */
    Vue.component("main-grid", {
        template: "#main-grid-template",
        props: {
            heroes: Array,
            columns: Array,
            filterKey: String
        },
        data: function () {
            var sortOrders = {};
            this.columns.forEach(function (key) {
                sortOrders[key] = 1;
            });
            return {
                sortKey: "",
                sortOrders: sortOrders,
                classCounter: 0
            };
        },
        computed: {
            filteredHeroes: function () {
                var sortKey = this.sortKey;
                var filterKey = this.filterKey && this.filterKey.toLowerCase();
                var order = this.sortOrders[sortKey] || 1;
                var heroes = this.heroes;
                if (filterKey) {
                    heroes = heroes.filter(function (row) {
                        return Object.keys(row).some(function (key) {
                            return (
                                String(row[key])
                                .toLowerCase()
                                .indexOf(filterKey) > -1
                            );
                        });
                    });
                }
                if (sortKey) {
                    heroes = heroes.slice().sort(function (a, b) {
                        a = a[sortKey];
                        b = b[sortKey];
                        return (a === b ? 0 : a > b ? 1 : -1) * order;
                    });
                }
                return heroes;
            }
        },
        filters: {
            capitalize: function (str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
        },
        methods: {
            sortBy: function (key) {
                this.sortKey = key;
                this.sortOrders[key] = this.sortOrders[key] * -1;
            },
            getClass: function (key) {
                key = key.replace(/, .*/, '');
                key = key.replace(/ .*/, '');
                var newKey = key;
                return newKey;
            },
            getClassTh: function (key) {
                key = key.replace(/, .*/, '');
                key = key.replace(/ .*/, '');
                var newClass = "th" + key;
                return newClass;
            },
            getClassTd: function (key) {
                key = key.replace(/, .*/, '');
                key = key.replace(/ .*/, '');
                var newClass = "td" + key;
                return newClass;
            },
            getClassOverlay: function (key) {
                key = key.replace(/, .*/, '');
                key = key.replace(/ .*/, '');
                var newClass = "overlay" + key;
                return newClass;
            },
            getClassPopup: function (key) {
                key = key.party;
                if (typeof key !== 'undefined') {
                    key = key.replace(/, .*/, '');
                    key = key.replace(/ .*/, '');
                    return "popupname " + key;
                } else {
                    return "popupname";
                }
            },
            getEntryParty: function (key) {
                return key.party;
            }
        }
    });
    Vue.component("detail-grid", {
        template: "#detail-grid-template",
        props: {
            heroes: Array,
            columns: Array,
            filterKey: String
        },
        data: function () {
            var sortOrders = {};
            this.columns.forEach(function (key) {
                sortOrders[key] = 1;
            });
            return {
                sortKey: "",
                sortOrders: sortOrders,
                classCounter: 0
            };
        },
        computed: {
            filteredHeroes: function () {
                var sortKey = this.sortKey;
                var filterKey = this.filterKey && this.filterKey.toLowerCase();
                var order = this.sortOrders[sortKey] || 1;
                var heroes = this.heroes;
                if (filterKey) {
                    heroes = heroes.filter(function (row) {
                        return Object.keys(row).some(function (key) {
                            return (
                                String(row[key])
                                .toLowerCase()
                                .indexOf(filterKey) > -1
                            );
                        });
                    });
                }
                if (sortKey) {
                    heroes = heroes.slice().sort(function (a, b) {
                        a = a[sortKey];
                        b = b[sortKey];
                        return (a === b ? 0 : a > b ? 1 : -1) * order;
                    });
                }
                return heroes;
            }
        },
        filters: {
            capitalize: function (str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
        },
        methods: {
            sortBy: function (key) {
                this.sortKey = key;
                this.sortOrders[key] = this.sortOrders[key] * -1;
            },
            getClass: function (key) {
                key = key.replace(/, .*/, '');
                key = key.replace(/ .*/, '');
                var newKey = key;
                return newKey;
            },
            getClassTh: function (key) {
                key = key.replace(/, .*/, '');
                key = key.replace(/ .*/, '');
                var newClass = "th" + key;
                return newClass;
            },
            getClassTd: function (key) {
                key = key.replace(/, .*/, '');
                key = key.replace(/ .*/, '');
                var newClass = "td" + key;
                return newClass;
            },
            getClassOverlay: function (key) {
                key = key.replace(/, .*/, '');
                key = key.replace(/ .*/, '');
                var newClass = "overlay" + key;
                return newClass;
            },
            getClassPopup: function (key) {
                key = key.party;
                if (typeof key !== 'undefined') {
                    key = key.replace(/, .*/, '');
                    key = key.replace(/ .*/, '');
                    return "popupname " + key;
                } else {
                    return "popupname";
                }
            },
            getEntryParty: function (key) {
                return key.party;
            }
        }
    });

    // bootstrap the demo
    var main = new Vue({
        el: "#nav",
        data: {
            header: "Please choose an option."
        }
    });
    var summary = new Vue({
        el: "#summary-table",
        data: {
            tableheadermain: "",
            tableheaderdetail: "",
            tableheaderadv: "",
            tableheadersp: "",
            tableheader: "",
            searchQuery: "",
            gridColumnsMain: allheadings,
            gridDataMain: [{
                mame: "Tawhai Wade",
                power: 100
            }],
            gridColumnsDetail: allheadings,
            gridDataDetailadv: [{
                name: "Tawhai Wade",
                p0wer: 100
            }],
            gridDataDetail: [{
                name: "Tawhai Wade",
                p0wer: 100
            }],
            gridDataDetailsp: [{
                name: "Tawhai Wade",
                p0wer: 100
            }],
            searchBar: "hidden",
            showGrid: true
        }
    });
    var detail = new Vue({
        el: "#detail-table",
        data: {
            header: "Please choose an option from above.",
            tableheadermain: "",
            tableheaderdetail: "",
            tableheaderadv: "",
            tableheadersp: "",
            tableheader: "",
            searchQuery: "",
            gridColumnsMain: allheadings,
            gridDataMain: [{
                mame: "Tawhai Wade",
                power: 100
            }],
            gridColumnsDetail: allheadings,
            gridDataDetailadv: [{
                name: "Tawhai Wade",
                p0wer: 100
            }],
            gridDataDetail: [{
                name: "Tawhai Wade",
                p0wer: 100
            }],
            gridDataDetailsp: [{
                name: "Tawhai Wade",
                p0wer: 100
            }],
            searchBar: "hidden",
            showGrid: true
        }
    });
    var schart = new Vue({
        el: '#app',
        components: {
            apexchart: VueApexCharts,
        },
        data: {

            series: [44, 55, 13, 43, 22],
            chartOptions: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                    }]
            },


        },

    });
    /*var buttons = new Vue({
        el: '#header',
        methods: {
            candidate: function () {
                main.showGrid = true;
                main.header = "Candidate";
                main.gridColumnsDetail = candidateheadings;
                main.gridDataDetail = advbooth;
                main.tableheadermain = "Votes by Candidate";
                main.tableheaderdetail = "Votes by Booth";
            },
            party: function () {
                main.showGrid = true;
                main.header = "Party";
                main.gridColumnsDetail = ["name", "power", "party"];
                main.gridDataDetail = [{
                    name: "Chuck Norris",
                    power: Infinity,
                    party: "The Opportunities Party (TOP)"
            }, {
                    name: "Bruce Lee",
                    power: 8800,
                    party: "National Party"
            }, {
                    name: "Jackie Chan",
                    power: 8002,
                    party: "Labour Party"
            }, {
                    name: "Jet Li",
                    power: 8500,
                    party: "Green Party"
            }];
            },
            summary: function () {}
        }
    });
*/
    /*SHOW THIS DATA ON PAGE LOAD*/
    summary.gridColumnsMain = ["name", "votes"];
    summary.gridDataMain = candidate;
    detail.gridColumnsDetail = candidateheadings;
    detail.gridDataDetailadv = advboothsc;
    detail.gridDataDetail = boothsc;
    detail.gridDataDetailsp = spboothsc;
    summary.tableheadermain = "Votes by Candidate";
    detail.tableheaderdetail = "Votes by Booth";
    detail.tableheaderadv = "Advanced Booths";
    detail.tableheader = "Voting Booths";
    summary.tableheadersp = "Special Voting booths";
    main.header = "Candidate Votes";
    schart.series = [100, 50, 75, 25, 85];

};
