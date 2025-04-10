Feature: Fungsi pendeteksi segitiga
Sebagai seorang user, saya ingin mengetahui segitiga apa yang akan terbentuk ketika saya memasukkan 3 buah input

Scenario Outline: Mendeteksi segitiga sama sisi
    Given Saya memiliki nilai <sideA>,<sideB>,<sideC>
    When Saya mendeteksi segitiga
    Then Menghasilkan segitiga sama sisi

Examples: 
| sideA | sideB | sideC |
| 4 | 4 | 4 |

