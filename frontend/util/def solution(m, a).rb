def solution(m, a)
    n = a.length
    count = Array.new(m + 1)
    count.fill(0)
    maxOccurence = 1
    index = -1
    for i in 0 .. n - 1
        if count[a[i]] > 0
            tmp = count[a[i]]
            if tmp > maxOccurence
                maxOccurence = tmp
                index = i
            end
            count[a[i]] = tmp + 1
        else
            count[a[i]] = 1
        end
    end
    return a[index]
end