<template>
    <div>
        <div>횟수: {{ tries }}</div>
        <form v-on:submit="onSubmit">
            <input type="number" ref="answer" maxlength="4" v-model="value">
            <button>입력</button>
        </form>
        <div>{{ text }}</div>
        <div>정답: {{ answer }}</div>
        <div>{{ answerText != '' ? answerText : '정답을 입력해주세요' }}</div>
        <div>스트라이크: {{ strike }} / 볼: {{ ball }}</div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                tries: '',
                value: '',
                text: '',
                answer: makeRandomNum(4),
                strike: 0,
                ball: 0,
                answerText: '',
            }
        },
        methods: {
            onSubmit(e){
                e.preventDefault()
                
                this.text = this.value
                
                let reply = []
                let value = this.value

                // strike, ball 초기화
                this.strike = 0
                this.ball = 0

                for(let i = 0; i<value.length; i++) {
                    if(Number(value[i]) === this.answer[i]) {
                        this.strike += 1
                    } else {
                        this.answer.forEach((answer) => {
                            if(Number(value[i]) === answer) {
                                this.ball += 1
                                return
                            }
                        })
                    }
                }

                if(this.strike === 4) {
                    this.answerText = '정답입니다'
                    this.answer = makeRandomNum(4)
                } else {
                    this.answerText = '다시 입력해주세요'
                }
                
                this.value = ''
                this.$refs.answer.focus()
            },
            
        }
    }

    function makeRandomNum(maxLength) {
        let randomArr = []

        for(let i = 0; randomArr.length < maxLength; i++) {
            let randomNum = Number((Math.random()*10).toFixed(0))
            if(randomNum < 10) {
                if(!randomArr.includes(randomNum)) {
                    // 중복 숫자 방지
                    randomArr.push(randomNum)
                }
            }
        }

        return randomArr
    }
</script>
<style></style>