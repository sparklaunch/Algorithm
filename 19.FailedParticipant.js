function solution(participants, finishedParticipants) {
    for (const finishedParticipant of finishedParticipants) {
        const index = participants.indexOf(finishedParticipant);
        participants.splice(index, 1);
    }
    return participants[0];
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(
    solution(
        ["marina", "josipa", "nikola", "vinko", "filipa"],
        ["josipa", "filipa", "marina", "nikola"]
    )
);
console.log(
    solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
