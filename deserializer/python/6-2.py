file = open('./algo-dpv-tests/6-2.txt', 'r')
tests = file.readlines()

for i, test in enumerate(tests):
  if i != len(tests) - 1:
    test = test[:-1]
  arr, expected = test.split(" ")
  arr = [int(x) for x in arr.split(",")]
  expected = [int(x) for x in expected.split(",")]

  actual = solution(arr)
  if actual == expected:
    print(f'@#$arr={arr}@#$')
  else:
    print(f'@#$arr={arr}; expected={expected}; actual={actual}@#$')
