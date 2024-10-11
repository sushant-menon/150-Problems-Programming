def fibonacciSeries(limit):
    series =[0,1]

    while True:
        nextNumber = series[len(series)-1] + series[len(series)-2]

        if nextNumber > limit:
            break
        series.append(nextNumber)

    print(series)
    

fibonacciSeries(10)
    
