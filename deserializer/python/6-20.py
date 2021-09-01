file = open('./algo-dpv-tests/6-20.txt', 'r')
tests = file.readlines()

for i, test in enumerate(tests):
  if i != len(tests) - 1:
    test = test[:-1]
  freq, expected = test.split(" ")
  freq = [int(x) for x in freq.split(",")]
  expected = int(expected)

  actual = solution(freq)
  if actual == expected:
    print(f'@#$freq={freq}@#$')
  else:
    print(f'@#$freq={freq}; expected={expected}; actual={actual}@#$')
