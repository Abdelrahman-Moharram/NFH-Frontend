export const phoneNumberPattern         = '^[0-9]{8}$'
export const commercialNumberRegex      = '^[1-9][0-9]{9}$'
export const identityNumberPattern      = '^[1-9][0-9]{9}$'
export const hijriDateRegex             = '^([٠-٢]?[٠-٩])-([٠-١]?[٠-٩])-(١[٣-٤][٠-٩][٠-٩]|[١٢][٠-٩][٠-٩][٠-٩])$'
export const numberPattern              = '[1-9][0-9]{2,}$'
export const amountPattern              = '^[0-9.]+$'

export const usernamePattern            = '^[a-zA-Z][a-zA-Z0-9_.-]{2,}$'
export const fullNamePattern            = '^[ء-ي][ء-ي ]{5,}$'
export const arDepartmentNamePattern    = '^[ء-ي][ء-ي ]{2,}$'
export const emailPattern               = '^[a-z][a-z0-9-_\.]+@[a-z.]+\.[a-z]{2,3}$'
export const departmentNamePattern      = '^[a-zA-Z][a-zA-Z0-9 ]{2,}$'

export const domainPattern              = '^(((?!-))(xn--|_)?[a-z0-9-]{0,61}[a-z0-9]{1,1}\.)*(xn--)?([a-z0-9][a-z0-9\-]{0,60}|[a-z0-9-]{1,30}\.[a-z]{2,})$'
export const portNumberPattern          = '^([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$'


export const departmentNameRegex        = {value:departmentNamePattern, message:'Department Name should contain at least 3 characters and without any special characters', message_ar:'اسم القسم يجب ان يتكون من 3 أحرف على الأقل بدون اي رموز'}
export const arDepartmentNameRegex      = {value:arDepartmentNamePattern, message:'Department Name should contain at least 3 characters and without any special characters', message_ar:'اسم القسم يجب ان يتكون من 3 أحرف على الأقل بدون اي رموز'}
export const usernameRegex              = {value:usernamePattern, message:'اسم المستخدم يجب ان يبدأ بأحرف ويحتوي على 3 أحرف على الأقل ولا يحتوي على [+%$#/|\!]'}
export const fullNameRegex              = {value:fullNamePattern, message:'Full Name Should have at least 5 letters and no digits', message_ar:'اسم المستخدم باللغة العربية يجب ان يكون كاملا باللغة العربية و بدون ارقام ولا يقل عن 5 أحرف'}
export const phoneNumberRegex           = {value:phoneNumberPattern, message:'يجب أن يحتوي يبدأ رقم الجوال على 8 ارقام بعد (9665+)'}
export const judgementNumberRegex       = {value:numberPattern, message:'رقم الحكم يجب أن يحتوي على أرقام فقط ويحتوي على 3 أرقام أو أكثر'}
export const amountRegex                = {value:amountPattern, message:'يجب أن يحتوي الملبغ على أرقام فقط'}
export const customerRegex              = {value:numberPattern, message:'يجب أن يحتوي رقم العميل على أرقام فقط وألا يقل عن 3 أرقام ولا يبدأ بالرقم "0"'}
export const identityNumberRegex        = {value:identityNumberPattern, message:'يجب أن يحتوي رقم الهوية على أرقام فقط ويتكون من 10 أرقام ولا يبدأ بالرقم "0"'}
export const emailAddressRegex          = {value:emailPattern, message:'البريد الإلكتروني غير صالح "example@domain.com" '}

export const domainRegex                = {value:domainPattern, message:'Invalid domain address', message_ar:'عنوان الكتروني غير صالح'}
export const portNumberRegex            = {value:portNumberPattern, message:'Invalid Port Number', message_ar:'Port Number غير صحيح'}



