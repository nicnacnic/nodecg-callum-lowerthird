const settings = nodecg.Replicant('settings')

NodeCG.waitForReplicants(settings).then(() => {
    nodecg.listenFor('openSettings', () => {
        document.getElementById('eventName').value = settings.value.eventName;
        document.getElementById('backgroundColor').value = settings.value.backgroundColor;
        document.getElementById('foregroundColor').value = settings.value.foregroundColor;
        document.getElementById('time').value = settings.value.time;
        nodecg.getDialog('settings').open();
    })
})