<!DOCTYPE html>
<html lang="en">
<head>
    <title>Elections 2017 - Otaki</title>
    <!--    Import Components   -->
    <meta charset="UTF-8">
    <!-- Import JQuery -->
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <!-- Fetch Json -->
    <script src="src/fetchJson.js"></script>
    <!-- VueJS Framework -->
    <script src="https://unpkg.com/vue"></script>
    <!-- APEX CHARTS -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue-apexcharts"></script>
    <!-- VueJS Script -->
    <script src="src/vueDisplay.js"></script>
    <!-- Bootstrap 4.4.1 -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <!-- Stylesheet-->
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="76x76" href="img//apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png">
    <link rel="mask-icon" href="img/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#ffc40d">
    <meta name="theme-color" content="#ffffff">
    <!-- Grid Template -->
    <script type="text/x-template" id="main-grid-template">
        <table>
            <thead>
                <tr>
                    <th v-for="key in columns" @click="sortBy(key)" :class="{ active: sortKey == key }">
                        <div :class="getClassTh(key)">
                            {{ getClass(key) | capitalize }}
                            <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
                            </span>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="entry in filteredHeroes">
                    <td v-for="key in columns">
                        <div class="container">
                            <div :class="getClassTd(key)">
                                {{entry[key]}}
                                <div :class="getClassPopup(entry)">
                                    {{getEntryParty(entry)}}
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </script>
    <script type="text/x-template" id="detail-grid-template">
        <table>
            <thead>
                <tr>
                    <th v-for="key in columns" @click="sortBy(key)" :class="{ active: sortKey == key }"><div :class="getClassTh(key)">
                        {{ getClass(key) | capitalize }}
                        <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
                        <span class="popupparty"> {{ key | capitalize }}</span>
                        </span></div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="entry in filteredHeroes">
                    <td :class="getClassTd(key)" v-for="key in columns">
                        {{entry[key]}}
                    </td>
                </tr>
            </tbody>
        </table>
    </script>
</head>


<body class="mx-auto">
    <header id="header" class="mx-auto">
        <img id="logo" src="img/logo.png" alt="Elections Logo">
    </header>
    <nav id="nav">
        <h1>{{header}}</h1>
    </nav>
    <main id="main" class="mx-auto">
        <section id="summary" class="row">
            <main-grid class="col" v-if="showGrid" id="summary-table" :heroes="gridDataMain" :columns="gridColumnsMain" :filter-key="searchQuery">
            </main-grid>
            <article id="app" class="col">
                <apexchart id="chart" class="mx-auto" type="pie" width="380" :options="chartOptions" :series="series"></apexchart>
            </article>
        </section>
        <section id="detail-table">
            <h2>{{tableheaderdetail}}</h2>
            <h3>{{tableheaderadv}}</h3>
            <detail-grid id="advanced-detail" v-if="showGrid" :heroes="gridDataDetailadv" :columns="gridColumnsDetail" :filter-key="searchQuery">
            </detail-grid>
            <h3>{{tableheader}}</h3>
            <detail-grid id="detail" v-if="showGrid" :heroes="gridDataDetail" :columns="gridColumnsDetail" :filter-key="searchQuery">
            </detail-grid>
            <h3>{{tableheadersp}}</h3>
            <detail-grid id="special-detail" v-if="showGrid" :heroes="gridDataDetailsp" :columns="gridColumnsDetail" :filter-key="searchQuery">
            </detail-grid>
        </section>
    </main>
    <!-- Import Grid Template-->
    <div id="includedContent" class="hidden"></div>
    <footer class="page-footer font-small fixed-bottom mx-auto align-middle">
        <div class="footer-copyright text-center">This is the <span class="dev">Dev</span> site. Go to: <a href="http://shapefunk.me/tw/tawhai/election.html"><span class="live">Live</span></a></div>
    </footer>
</body>
<!--
        <form id="search" v-if="searchBar === 'shown'">
            Search <input name="query" v-model="searchQuery" />
        </form>
--></html>
