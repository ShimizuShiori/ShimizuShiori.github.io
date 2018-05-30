define(function() {
    class MoneyPerYear {
        constructor(theYear, theLastYearMoney, theFincateRate) {
            this.year = theYear;
            this.lastYearMoney = theLastYearMoney;
            this.fincateRate = theFincateRate;
            this.inMoney = 0;
            this.outMoney = 0;
        }

        getEndMoney() {
            var result = this.getRealInMoney() - this.outMoney;
            console.log("getEndMoney", result);
            return result;
        }

        getRealInMoney() {
            var result =
                this.lastYearMoney * (this.fincateRate - 1) + this.inMoney;
            console.log("getRealInMoney", result);
            return result;
        }

        getFinMoney() {
            return this.lastYearMoney * (this.fincateRate - 1);
        }

        getInOutRate() {
            console.log(
                `本金 : ${this.lastYearMoney} , 理财所得 : ${this
                    .lastYearMoney *
                    (this.fincateRate - 1)}`
            );
            return this.lastYearMoney * (this.fincateRate - 1) / this.outMoney;
        }

        NexYear() {
            var result = new MoneyPerYear(
                this.year + 1,
                this.getEndMoney(),
                this.fincateRate
            );
            console.log(`次年期初为 : ${result.lastYearMoney}`);
            return result;
        }
    }

    return MoneyPerYear;
});
