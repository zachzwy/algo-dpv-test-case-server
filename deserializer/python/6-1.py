file = open('./algo-dpv-tests/6-1.txt', 'r')
tests = file.readlines()

for i, test in enumerate(tests):
  if i != len(tests) - 1:
    test = test[:-1]
  arr, expected = test.split(" ")
  arr = [int(x) for x in arr.split(",")]
  expected = int(expected)

  actual = solution(arr)
  if actual == int(expected):
    print(f'@#$arr={arr}@#$')
  else:
    print(f'@#$arr={arr}; expected={expected}; actual={actual}@#$')
