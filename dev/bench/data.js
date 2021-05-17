window.BENCHMARK_DATA = {
  lastUpdate: 1621219805103,
  repoUrl: 'https://github.com/napi-rs/napi-rs',
  entries: {
    Benchmark: [
      {
        commit: {
          author: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          committer: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          distinct: true,
          id: '1986cf0c9ab5847e78a93f47b1360a189eab2a8b',
          message: 'ci: pin rust toolchain on 1.51.0 on windows-i686 target',
          timestamp: '2021-05-17T10:46:29+08:00',
          tree_id: 'cc21fa2afc5b40e183a53c66ecb202349aaa75c0',
          url: 'https://github.com/napi-rs/napi-rs/commit/1986cf0c9ab5847e78a93f47b1360a189eab2a8b',
        },
        date: 1621219803828,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 60728284,
            range: '±0.87%',
            unit: 'ops/sec',
            extra: '93 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 713993435,
            range: '±0.14%',
            unit: 'ops/sec',
            extra: '97 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 22636542,
            range: '±0.97%',
            unit: 'ops/sec',
            extra: '95 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 713191090,
            range: '±0.14%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 94622,
            range: '±23.62%',
            unit: 'ops/sec',
            extra: '64 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 133418,
            range: '±3.38%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 454060,
            range: '±25.47%',
            unit: 'ops/sec',
            extra: '72 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 445107,
            range: '±2.85%',
            unit: 'ops/sec',
            extra: '86 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 465889,
            range: '±2.78%',
            unit: 'ops/sec',
            extra: '85 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 421737,
            range: '±2.94%',
            unit: 'ops/sec',
            extra: '86 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 38728,
            range: '±0.46%',
            unit: 'ops/sec',
            extra: '84 samples',
          },
          {
            name: 'Async task#thread safe function',
            value: 14490,
            range: '±28.72%',
            unit: 'ops/sec',
            extra: '79 samples',
          },
        ],
      },
    ],
  },
}
