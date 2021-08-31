file = open('./algo-dpv-tests/6-18.txt', 'r')
tests = file.readlines()

for i, test in enumerate(tests):
  if i != len(tests) - 1:
    test = test[:-1]
  coins, target, expected = test.split(" ")
  coins = [int(x) for x in coins.split(",")]
  target = int(target)
  expected = True if expected == "true" else False

  actual = solution(coins, target)
  if actual == expected:
    print(f'@#$coins={coins}; target={target}@#$')
  else:
    print(f'@#$coins={coins}; target={target}; expected={expected}; actual={actual}@#$')
