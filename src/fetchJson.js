fetch('https://shapefunk.me/tw/tawhai/json/electiondata.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        enrolments = data
        candidate = data['enrolments']
        advboothsc = data['aboothsc']
        advboothsp = data['aboothsp']
        boothsc = data['boothsc']
        boothsp = data['boothsp']
        spboothsc = data['sboothsc']
        spboothp = data['sboothsp']
        allheadings = data['allheadings']
        candidateheadings = data['candidateheadings']
        partyheadings = data['partyheadings']
        candidateheadingsmain = data['candidateheadingsmain']
        partyheadingsmain = data['partyheadingsmain']
        partychartheadings = data['partychartheadings']
        partychartdata = data['partychartdata']
        candidatechartheadings = data['candidatechartheadings']
        candidatechartdata = data['candidatechartdata']
    })
    .catch(err => {
        console.log('There was an error fetching Json File')
    })
