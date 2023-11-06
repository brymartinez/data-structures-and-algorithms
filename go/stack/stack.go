package stack

type Stack []int

func (stack *Stack) Push(s int) {
	*stack = append(*stack, s)
}

func (stack *Stack) Pop() (int, bool) {
	lastElement := len(*stack) - 1

	if lastElement == -1 {
		return 0, false
	}

	last := (*stack)[lastElement]
	val := (*stack)[:lastElement]
	*stack = val
	return last, true
}
