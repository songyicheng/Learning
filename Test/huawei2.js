const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', function(line) {
    inputLines.push(line.trim());
    console.log("您输入了："+line);
});

rl.on('close', function() {
    let index = 0;
    const N = parseInt(inputLines[index++]);

    // Read durations
    const durationStr = inputLines[index++].split(/\s+/);
    const duration = new Array(N + 1);
    for (let i = 1; i <= N; i++) {
        duration[i] = parseInt(durationStr[i - 1]);
    }

    // Initialize adjacency list and in-degree array
    const adj = new Array(N + 1);
    for (let i = 1; i <= N; i++) {
        adj[i] = [];
    }
    const inDegree = new Array(N + 1).fill(0);

    // Read dependencies
    for (let i = 1; i <= N; i++) {
        const line = inputLines[index++];
        if (line === '-1') {
            // No dependencies
            continue;
        } else {
            const deps = line.split(/\s+/);
            for (let depStr of deps) {
                const dep = parseInt(depStr);
                adj[dep].push(i); // dep is a predecessor of i
                inDegree[i]++;
            }
        }
    }

    // Initialize earliest start times and earliest finish times
    const ES = new Array(N + 1).fill(0); // Earliest start time
    const EF = new Array(N + 1).fill(0); // Earliest finish time

    // Initialize queue with steps that have in-degree 0
    const queue = [];
    for (let i = 1; i <= N; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
            ES[i] = 0;
            EF[i] = ES[i] + duration[i];
        }
    }

    // Process the queue
    while (queue.length > 0) {
        const u = queue.shift();
        // For each successor v of u
        for (let v of adj[u]) {
            // Update earliest start time of v
            if (ES[v] < EF[u]) {
                ES[v] = EF[u];
            }
            // Decrease in-degree of v
            inDegree[v]--;
            if (inDegree[v] === 0) {
                // All dependencies resolved, compute EF[v]
                EF[v] = ES[v] + duration[v];
                queue.push(v);
            }
        }
    }

    // Find the maximum EF[i]
    let totalTime = 0;
    for (let i = 1; i <= N; i++) {
        if (EF[i] > totalTime) {
            totalTime = EF[i];
        }
    }

    // Output the total time
    console.log('最短时间为：'+ totalTime);
});