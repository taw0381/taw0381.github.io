// Create Class
class Controller {
    static setup() {
        the_election.add_party(partydata)
        the_election.add_candidate()
        the_election.add_candidate_booths(advboothc, 'advanced')
        the_election.add_candidate_booths(boothc, 'standard')
        the_election.add_candidate_booths(spboothc, 'special')
        the_election.add_party_booths(advboothp, 'advanced')
        the_election.add_party_booths(boothp, 'standard')
        the_election.add_party_booths(spboothp, 'special')
        console.log('added data Successfully')
        console.log(the_election)
    }
}
class Election {
    constructor(newName) {
        this.name = newName
        this.allMySuburbs = []
        this.allMyParties = []
        this.allMyCandidates = []
    }
    toString() {
        return this.name
    }
    add_party() {
        var i = 0
        try {
            while (i < partydata.length) {
                let newName = partydata[i].name
                let newVotes = partydata[i].votes
                let newParty = new Party(newName, newVotes)
                this.allMyParties.push(newParty)
                i = i + 1;
            }
        } catch (err) {
            let message = "add_party - " + err
            console.log(message)
        }
    }
    add_suburb() {
        var i = 0
        while (i < advboothc.length) {
            let newName = advboothc[i].suburb
            let aSuburb = this.suburb_exists(newName)
            if (!aSuburb) {
                aSuburb = new Suburb(newName)
                this.allMySuburbs.push(aSuburb)
            }
            i = i + 1
        }
    }
    add_candidate() {
        var i = 0
        try {
            while (i < candidate.length) {
                let newName = candidate[i].name
                let newVotes = candidate[i].votes
                let aParty = this.find_party(candidate[i].party)
                let aCandidate = new Candidate(newName, newVotes)
                aParty.allMyCandidates.push(aCandidate)
                the_election.allMyCandidates.push(aCandidate)
                aCandidate.myParty.push(aParty)
                i = i + 1
            }
        } catch (err) {
            let message = "add_candidate - " + err
            console.log(message)
        }
    }
    add_candidate_booths(boothData, targetList) {
        var i = 0
        try {
            while (i < boothData.length) {
                let aSuburb_exits = this.suburb_exists(boothData[i].suburb)
                if (!aSuburb_exits) {
                    let newSuburb = new Suburb(boothData[i].suburb)
                    this.allMySuburbs.push(newSuburb)
                }
                let aSuburb = this.find_suburb(boothData[i].suburb)
                let abooth_exists = aSuburb.cbooth_exists(boothData[i].location, targetList)
                if (!abooth_exists) {
                    let newLocation = boothData[i].location
                    let newFergusonVotes = boothData[i]['ferguson, Samuel David']
                    let newGrattanVotes = boothData[i]['grattan, Wayne Desmond']
                    let newGuyVotes = boothData[i]['guy, Allen Nathan']
                    let newJenningsVotes = boothData[i]['jennings, Samuel John Robert']
                    let newMccannVotes = boothData[i]['mcCann, Robert Eric']
                    let newRudzkiVotes = boothData[i]['rudzki, Romuald Edward']
                    let newTukapuaVotes = boothData[i]['tukapua, Piri-Hira Josephine']
                    let newTotalVotes = boothData[i]['total Valid Candidate Votes']
                    let newInformalVotes = boothData[i]['informal Candidate Votes']
                    let abooth = new BoothC(newLocation, newFergusonVotes, newGrattanVotes, newGuyVotes, newJenningsVotes, newMccannVotes, newRudzkiVotes, newTukapuaVotes, newTotalVotes, newInformalVotes)
                    if (targetList === 'advanced') {
                        aSuburb.allMyAdvCandidateBooths.push(abooth)
                    }
                    if (targetList === 'standard') {
                        aSuburb.allMyCandidateBooths.push(abooth)
                    }
                    if (targetList === 'special') {
                        aSuburb.allMySpCandidateBooths.push(abooth)
                    }
                }
                i = i + 1
            }
        } catch (err) {
            let message = "add_candidateBooths - " + err
            console.log(message)
        }
    }
    add_party_booths(boothData, targetList) {
        var i = 0
            while (i < boothData.length) {
                let aSuburb_exits = this.suburb_exists(boothData[i].suburb)
                if (!aSuburb_exits) {
                    let newSuburb = new Suburb(boothData[i].suburb)
                    this.allMySuburbs.push(newSuburb)
                }
                let aSuburb = this.find_suburb(boothData[i].suburb)
                let abooth_exists = aSuburb.pbooth_exists(boothData[i].location, targetList)
                if (!abooth_exists) {
                    let newLocation = boothData[i].location
                    let newActVotes = boothData[i]['ACT New Zealand']
                    let newCannabisVotes = boothData[i]['Aotearoa Legalise Cannabis Party']
                    let newBan1080Votes = boothData[i]['Ban1080']
                    let newConservativeVotes = boothData[i]['Conservative']
                    let newDemocratsVotes = boothData[i]['Democrats for Social Credit']
                    let newGreenVotes = boothData[i]['Green Party']
                    let newInternetVotes = boothData[i]['Internet Party']
                    let newLabourVotes = boothData[i]['Labour Party']
                    let newManaVotes = boothData[i]['MANA']
                    let newMaoriVotes = boothData[i]['Maori Party']
                    let newNationalVotes = boothData[i]['National Party']
                    let newFirstVotes = boothData[i]['New Zealand First Party']
                    let newPeopleVotes = boothData[i]['New Zealand People\'s Party']
                    let newOutdoorsVotes = boothData[i]['NZ Outdoors Party']
                    let newTopVotes = boothData[i]['The Opportunities Party (TOP)']
                    let newUnitedVotes = boothData[i]['United Future']
                    let newTotalVotes = boothData[i]['Total Valid Party Votes']
                    let newInformalVotes = boothData[i]['Informal Party Votes']
                    let abooth = new BoothP(newLocation, newActVotes, newCannabisVotes, newBan1080Votes, newConservativeVotes, newDemocratsVotes, newGreenVotes, newInternetVotes, newLabourVotes, newManaVotes, newMaoriVotes, newNationalVotes, newFirstVotes, newPeopleVotes, newOutdoorsVotes, newTopVotes, newUnitedVotes, newTotalVotes, newInformalVotes)
                    if (targetList === 'advanced') {
                        aSuburb.allMyAdvPartyBooths.push(abooth)
                    }
                    if (targetList === 'standard') {
                        aSuburb.allMyPartyBooths.push(abooth)
                    }
                    if (targetList === 'special') {
                        aSuburb.allMySpPartyBooths.push(abooth)
                    }
                }
                i = i + 1
            }
    }

    suburb_exists(targetName) {
        return this.allMySuburbs.find(aSuburb => aSuburb.name === targetName)
    }
    find_party(targetName) {
        for (let aParty of this.allMyParties) {
            if (targetName === aParty.name) {
                return aParty
            }
        }
    }
    find_suburb(targetName) {
        for (let aSuburb of this.allMySuburbs) {
            if (targetName === aSuburb.name) {
                return aSuburb
            }
        }
    }
}
var the_election = new Election('2017 Election - Otaki')
class Party {
    constructor(newName, newVotes) {
        this.name = newName
        this.votes = newVotes
        this.allMyCandidates = []
    }
    find_candidate(targetName) {
        return this.allMyCandidates.find(aCandidate => aCandidate.name === targetName)
    }
}
class Suburb {
    constructor(newName) {
        this.name = newName
        this.allMyAdvCandidateBooths = []
        this.allMyCandidateBooths = []
        this.allMySpCandidateBooths = []
        this.allMyAdvPartyBooths = []
        this.allMyPartyBooths = []
        this.allMySpPartyBooths = []
    }
    cbooth_exists(targetName, targetList) {
        if (targetList === 'advanced') {
            return this.allMyAdvCandidateBooths.find(aBooth => aBooth.location === targetName)
        }
        if (targetList === 'standard') {
            return this.allMyCandidateBooths.find(aBooth => aBooth.location === targetName)
        }
        if (targetList === 'special') {
            return this.allMySpCandidateBooths.find(aBooth => aBooth.location === targetName)
        }
    }
    pbooth_exists(targetName, targetList) {
        if (targetList === 'advanced') {
            return this.allMyAdvPartyBooths.find(aBooth => aBooth.location === targetName)
        }
        if (targetList === 'standard') {
            return this.allMyPartyBooths.find(aBooth => aBooth.location === targetName)
        }
        if (targetList === 'special') {
            return this.allMySpPartyBooths.find(aBooth => aBooth.location === targetName)
        }
    }
}
class Candidate {
    constructor(newName, newVotes) {
        this.name = newName
        this.votes = newVotes
        this.myParty = []
    }
}
class BoothC {
    constructor(newLocation, newFergusonVotes, newGrattanVotes, newGuyVotes, newJenningsVotes, newMccannVotes, newRudzkiVotes, newTukapuaVotes, newTotalVotes, newInformalVotes) {
        this.location = newLocation
        this.fergusonVotes = newFergusonVotes
        this.grattanVotes = newGrattanVotes
        this.guyVotes = newGuyVotes
        this.jenningsVotes = newJenningsVotes
        this.mccannVotes = newMccannVotes
        this.rudzkiVotes = newRudzkiVotes
        this.tukapuaVotes = newTukapuaVotes
        this.totalCVotes = newTotalVotes
        this.informalCVotes = newInformalVotes
    }
}
class BoothP {
    constructor(newLocation, newActVotes, newCannabisVotes, newBan1080Votes, newConservativeVotes, newDemocratsVotes, newGreenVotes, newInternetVotes, newLabourVotes, newManaVotes, newMaoriVotes, newNationalVotes, newFirstVotes, newPeopleVotes, newOutdoorsVotes, newTopVotes, newUnitedVotes, newTotalVotes, newInformalVotes) {
        this.location = newLocation
        this.actVotes = newActVotes
        this.cannabisVotes = newCannabisVotes
        this.ban1080Votes = newBan1080Votes
        this.conservativeVotes = newConservativeVotes
        this.DemocratsVotes = newDemocratsVotes
        this.greenVotes = newGreenVotes
        this.internetVotes = newInternetVotes
        this.labourVotes = newLabourVotes
        this.manaVotes = newManaVotes
        this.maoriVotes = newMaoriVotes
        this.nationalVotes = newNationalVotes
        this.nzfirstVotes = newFirstVotes
        this.peopleVotes = newPeopleVotes
        this.outdoorsVotes = newOutdoorsVotes
        this.topVotes = newTopVotes
        this.unitedVoted = newUnitedVotes
        this.totalPVotes = newTotalVotes
        this.informalPVotes = newInformalVotes
    }
}
// Fetch Json File
fetch('https://shapefunk.me/tw/tawhai/json/electiondata.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        enrolments = data
        candidate = data['enrolments']
        partydata = data['parties']
        advboothc = data['aboothsc']
        boothc = data['boothsc']
        spboothc = data['sboothsc']
        advboothp = data['aboothsp']
        boothp = data['boothsp']
        spboothp = data['sboothsp']
        allheadings = data['allheadings']
        candidateheadings = data['candidateheadings']
        partyheadings = data['partyheadings']
        candidateheadingsmain = data['candidateheadingsmain']
        partyheadingsmain = data['partyheadingsmain']
        Controller.setup()
    })
    .catch(err => {
        console.log('There was an error fetching Json File')
    })
